const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const AdviceGarment = require("./advice-garment.model");

const router = crud(AdviceGarment);

router.get("/", (req, res, next) => {
  AdviceGarment.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;