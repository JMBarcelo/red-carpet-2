const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  sendNotification,
  getNotification,
  respond,
  erase
} = require("./notification.controller");

router.post("/send", sendNotification);
router.get("/", getNotification);
router.put("/respond", respond);
router.delete("/", erase);

module.exports = router;