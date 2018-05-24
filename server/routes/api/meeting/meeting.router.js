const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Meeting = require("./meeting.model");

const router = crud(Meeting);

router.get("/", (req, res, next) => {
  Meeting.find({'_user' : res.locals.user._id})
    .populate('clothes')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/addgarment/:id", (req, res, next) => {
  console.log(req.body)
  Meeting.findById(req.params.id).update({$addToSet:{clothes:req.body.garmentID}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;