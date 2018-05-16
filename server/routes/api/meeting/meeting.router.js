const express = require("express");
const passport = require("passport");
const crud = require("../../crud")
const Meeting = require("./meeting.model")
const _ = require("lodash");
const fields = Object.keys(_.omit(Meeting.schema.paths, ["__v", "_id"]));

const router = crud(Meeting);

router.get("/", (req, res, next) => {
  Meeting.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.post("/", (req, res, next) => {
  const obj = _.pick(req.body, fields);
  Meeting.create(obj, (err, objArr) => {
    console.log(req.user)
    req.user.update({$push:{meetings:objArr._id}, obj:true}).then(() => 
    res.status(200).json(objArr._id))
  })
    //.then(object => res.json(object))
    .catch(e => next(e));
});

router.delete("/:id", (req, res, next) => {
  Meeting.findByIdAndRemove(req.params.id, (err, objArr) => {
    console.log(objArr)
    req.user.update({$pull:{meetings:objArr._id}})
  })
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

module.exports = router;