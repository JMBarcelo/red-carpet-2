const express = require("express");
const passport = require("passport");
const crud = require("../../crud")
const Garment = require("./garment.model")
const _ = require("lodash");
const fields = Object.keys(_.omit(Garment.schema.paths, ["__v", "_id"]));

const router = crud(Garment);

router.get("/", (req, res, next) => {
  Garment.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.post("/", (req, res, next) => {
  const obj = _.pick(req.body, fields);
  Garment.create(obj, (err, objArr) => {
    console.log(req.user)
    req.user.update({$push:{clothes:objArr._id}, obj:true}).then(() => 
    res.status(200).json(objArr._id))
  })
    .then(object => res.json(object))
    .catch(e => next(e));
});

router.delete("/:id", (req, res, next) => {
  Garment.findByIdAndRemove(req.params.id, (err, objArr) => {
    req.user.update({$pull:{clothes:objArr._id}, obj:true})
  })
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;