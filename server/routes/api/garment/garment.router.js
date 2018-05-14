const express = require("express");
const passport = require("passport");
const crud = require("../../crud")
const Garment = require("./garment.model")

const {
  create,
  getGarment,
  update,
  erase
} = require("./garment.controller");

const router = crud(Garment);

//router.post("/garment", create);
//router.get("/", getGarment);
//router.put("/update/:id", update);
//router.delete("/", erase);

module.exports = router;