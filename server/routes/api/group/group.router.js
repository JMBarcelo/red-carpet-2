const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Group = require("./group.model");

const router = crud(Group);

router.get("/", (req, res, next) => {
  Group.find({'users' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.get("/getGarment/:id", (req, res, next) => {
  Group.findById({'users' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
})

router.put("/garmentgroup/:id", (req, res, next) => {
  Group.findById(req.params.id).update({$push:{clothes:req.body.garment}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;