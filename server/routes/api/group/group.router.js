const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  create,
  getGroup,
  update,
  joinGroup,
  erase
} = require("./group.controller");

router.post("/group", create);
router.get("/", getGroup);
router.put("/update/:id", update);
router.post("/group", joinGroup);
router.delete("/", erase);

module.exports = router;