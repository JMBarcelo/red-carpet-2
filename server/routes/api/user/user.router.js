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
  getUsers,
  update,
  erase
} = require("./user.controller");

router.get("/session", loggedIn);
router.get("/logout", logout);
router.put("/update/:id", update);
router.post("/login", login);
router.post("/signup", signup);
router.get("/", getUsers);
router.delete("/", erase);

module.exports = router;