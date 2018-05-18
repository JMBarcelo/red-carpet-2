const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Garment = require("./garment.model");

const router = crud(Garment);

router.get("/", (req, res, next) => {
  Garment.find({'_user' : res.locals.user._id})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/usergarment/:id", (req, res, next) => {
  Garment.findById(req.params.id).update({
    $set: {borrower:req.body.user},
    $addToSet: {dates: req.body.dm},
    obj:true
  })
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;