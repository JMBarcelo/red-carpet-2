const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Group = require("./group.model");

const router = crud(Group);

router.get("/", (req, res, next) => {
  Group.find({'users' : res.locals.user._id})
    .populate('users')
    .populate('username.users')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.get("/garment/:id", (req, res, next) => {
  Group.findById(req.params.id)
    .populate('clothes')
    .populate('users')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/togroup/:id", (req, res, next) => {
  Group.findById(req.params.id).update({$addToSet:{clothes:req.body.garment}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/usergroup/:id", (req, res, next) => {
  Group.findById(req.params.id).update({$addToSet:{users:req.body.user}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/leavegroup/:id", (req, res, next) => {
  Group.findById(req.params.id).update({$pull:{users:req.body.user}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;