const express = require("express");
const passport = require("passport");
const crud = require("../../crud")
const Group = require("./group.model")
const _ = require("lodash");
const fields = Object.keys(_.omit(Group.schema.paths, ["__v", "_id"]));

const router = crud(Group);

router.get("/", (req, res, next) => {
  Group.find({'users' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.post("/", (req, res, next) => {
  const obj = _.pick(req.body, fields);
  Group.create(obj, (err, objArr) => {
    console.log(req.user)
    req.user.update({$push:{groups:objArr._id}, obj:true}).then(() => 
    res.status(200).json(objArr._id))
  })
    .then(object => res.json(object))
    .catch(e => next(e));
});

router.delete("/:id", (req, res, next) => {
  Group.findByIdAndRemove(req.params.id, (err, objArr) => {
    req.user.update({$pull:{groups:objArr._id}, obj:true})
  })
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;