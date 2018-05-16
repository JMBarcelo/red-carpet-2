const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Meeting = require("./meeting.model");

const router = crud(Meeting);

router.get("/", (req, res, next) => {
  Meeting.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;