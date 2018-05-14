const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  create,
  getEvent,
  update,
  erase
} = require("./meeting.controller");

router.post("/meeting", create);
router.get("/", getEvent);
router.put("/update/:id", update);
router.delete("/", erase);

module.exports = router;