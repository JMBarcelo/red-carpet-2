const express = require("express");
const passport = require("passport");
const crud = require("../../crud")
const Favslist = require("./favslist.model")
const _ = require("lodash");
const fields = Object.keys(_.omit(Favslist.schema.paths, ["__v", "_id"]));

const router = crud(Favslist);

router.get("/", (req, res, next) => {
  Favslist.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.post("/", (req, res, next) => {
  const obj = _.pick(req.body, fields);
  Favslist.create(obj, (err, objArr) => {
    console.log(req.user)
    req.user.update({$push:{favslists:objArr._id}, obj:true}).then(() => 
    res.status(200).json(objArr._id))
  })
    .then(object => res.json(object))
    .catch(e => next(e));
});

router.delete("/:id", (req, res, next) => {
  Favslist.findByIdAndRemove(req.params.id, (err, objArr) => {
    req.user.update({$pull:{favslists:objArr._id}, obj:true})
  })
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;