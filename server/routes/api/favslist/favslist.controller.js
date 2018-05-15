const express = require("express");
const router = express.Router();
const Favslist = require("./favslist.model");
const loggedIn = require("../../isAuth");

const getAll = (req, res, next) => {
  Favslist.find({})
    .populate("_user")
    .exec((err, favslists) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json(favslists);
    });
};

const getFavslist = (req, res, next) => {
  Favslist.findById(req.params.id)
    .populate("_user")
    .exec((err, favslist) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (!favslist) {
        return res.status(404).json(err);
      }

      return res.status(200).json(favslist);
    });
};

const create = (req, res, next) => {
  if (loggedIn) {
    const newFavslist = new Favslists({
      _user: req.user._id,
      //photo
      title: req.body.size,
      color: req.body.brand,
    });

    newFavslist.save(err => {
      if (err) {
        return res.status(500).json(err);
      }
      if (newFavslist.errors) {
        return res.status(400).json(newFavslist);
      }

      return res.status(200).json(newFavslist);
    });    
  }
};

module.exports = router;
