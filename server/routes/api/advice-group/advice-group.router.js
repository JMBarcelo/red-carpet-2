const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const AdviceGroup = require("./advice-group.model");

const router = crud(AdviceGroup);

router.get("/", (req, res, next) => {
  AdviceGroup.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;