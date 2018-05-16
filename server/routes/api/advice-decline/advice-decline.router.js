const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const AdviceDecline = require("./advice-decline.model");

const router = crud(AdviceDecline);

router.get("/", (req, res, next) => {
  AdviceDecline.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;