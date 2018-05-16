require("dotenv").config();

const _ = require("lodash");
const path = require("path");
const bcrypt = require("bcrypt");
const User = require("./user.model");
const bcryptSalt = parseInt(process.env.BCRYPT);
const debug = require("debug")("server:user.controller");
const fields = Object.keys(_.omit(User.schema.paths, ["__v", "_id"]));

const getThisUser = (req, res, next) => {
  if (req.user) {
    User.findById(req.user.id)
      .select("-password")
      .then(user => {
        res.status(200).json(
          user
        );
      })
      .catch(err => {
        debug(err);
        res.status(400).json({
          message: "Error retrieving user"
        });
      });
  } else {
    res.status(400).json({
      message: "You should login first"
    });
  }
};

const getUsers = (req, res, next) => {
  User.find({ _id: {$ne:req.user._id} } )
    .select('-password')
    .select('-email')
    .select('-_id')
    .select('-updated_at')
    .select('-created_at')
    .select('-birthday')
    .select('-__v')
    .select('-isAdmin')
    .select('-city')    
    .then(objects => res.json(objects))
    .catch(e => next(e));
};

const update = (req, res, next) => {
  let updates = _.pick(req.body, fields);

  if (req.body.newPassword) {
    User.findById(req.user.id)
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const hashPass = bcrypt.hashSync(req.body.newPassword, salt);
          updates.password = hashPass;

          User.update(updates)
            .then(user => {
              res.status(200).json({
                message: "User updated. Password updated."
              });
            })
            .catch(err => {
              debug(err);
              res.status(500).json({
                message: "Error updating user"
              });
            });
        } else {
          res.status(400).json({
            message: "Incorrect password"
          });
          return;
        }
      })
      .catch(err => {
        debug(err);
        res.status(500).json({
          message: "Error updating user"
        });
      });
  } else {
    updates = _.omit(updates, ["password"]);

    User.findByIdAndUpdate(req.user.id, updates, {new : true})
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        debug(err);
        res.status(500).json({
          message: "Error updating user"
        });
      });
  }
};

const erase = (req, res, next) => {
  if (req.user) {
    User.findByIdAndRemove(req.user.id)
      .then(() => {
        req.session.destroy(function (err) {
          res.status(200).json({
            message: "User removed"
          });
        });
      })
      .catch(err => {
        debug(err);
        res.status(500).json({
          message: "Error when erasing user"
        });
      });
  } else {
    res.status(400).json({
      message: "You are not logged in!"
    });
    return;
  }
};

module.exports = {
  getThisUser,
  getUsers,
  update,
  erase
}