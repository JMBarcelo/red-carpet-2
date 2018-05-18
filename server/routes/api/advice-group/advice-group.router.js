const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const AdviceGroup = require("./advice-group.model");

const router = crud(AdviceGroup);

router.get("/", (req, res, next) => {
  AdviceGroup.find({'_receiver' : res.locals.user._id})
    .populate('_receiver') 
    .populate('_sender', 'username')
    .populate('_group', 'name')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;