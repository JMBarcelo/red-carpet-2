const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  create,
  getFavslists,
  update,
  erase
} = require("./favslists.controller");

router.post("/favslists", create);
router.get("/", getFavslists);
router.put("/update/:id", update);
router.delete("/", erase);

module.exports = router;