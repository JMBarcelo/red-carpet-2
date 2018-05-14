const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  loggedIn,
  logout,
  signup,
  login
} = require("./user.auth");

const {
//   getThisUser,
//   getUser,
  update,
  erase
} = require("./user.controller");

// router.get("/single/:id", getUser);
// router.get("/", getThisUser);

router.get("/session", loggedIn);
router.get("/logout", logout);
router.put("/update/:id", update);
router.post("/login", login);
router.post("/signup", signup);
router.delete("/", erase);

module.exports = router;