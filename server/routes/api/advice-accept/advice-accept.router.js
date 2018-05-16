const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const AdviceAccept = require("./advice-accept.model");

const router = crud(AdviceAccept);

router.get("/", (req, res, next) => {
  AdviceAccept.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;