const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Favslist = require("./favslist.model");

const router = crud(Favslist);

router.get("/", (req, res, next) => {
  Favslist.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;