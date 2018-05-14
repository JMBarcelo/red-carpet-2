const User = require("./user.model");
const bcrypt = require("bcrypt");
const bcryptSalt = parseInt(process.env.BCRYPT);

const logInPromise = (user, req) =>
  new Promise((resolve, reject) => {
    req.login(user, err => {
      if (err) return reject(err);
      resolve(user);
    });
  });

const signup = (req, res, next) => {
  const { username, password, email, birthday, city } = req.body;

  if (!username || !password || !email || !birthday || !city) {
    res.status(401).json({ message: "Provide all fields" });
    return;
  }

  User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.status(409).json({ message: "User already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashPass,
        email,
        birthday,
        city
      });

      return newUser.save().then(user => {
        logInPromise(user, req).then(user => res.status(200).json(user));
      });
    })
    .catch(e =>
      res
        .status(500)
        .json({ message: "Something went wrong when trying to find user" })
    );
};

const login = (req, res, next) => {
  const { username, password } = req.body;

  if (req.user) {
    return res.json("User already logged in");
  }

  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  User.findOne({ username })
    .then(user => {
      if (!user) throw new Error("The username does not exist");
      if (!bcrypt.compareSync(password, user.password))
        throw new Error("The password is not correct");
      return logInPromise(user, req);
    })
    .then(user => res.status(200).json(user))
    .catch(e => res.status(500).json({ message: e.message }));
};

const loggedIn = (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(400).json({
      message: "You should login first"
    });
  }
};

const logout = (req, res) => {
  const user = req.user;
  if (user) {
    req.session.destroy(function(err) {
      res.status(200).json({
        message: "Logged out"
      });
    });
  } else {
    res.status(400).json({
      message: "You are not logged in!"
    });
  }
};

module.exports = {
  signup,
  login,
  loggedIn,
  logout
};
