const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const AdviceGarment = require("./advice-garment.model");

const router = crud(AdviceGarment);

router.get("/", (req, res, next) => {
  AdviceGarment.find({'_receiver' : res.locals.user._id})
    .populate('_receiver')  
    .populate('_sender', 'username')
    .populate('_garment', 'kind')
    .populate('_garment', 'brand')
    .populate('_garment', 'size')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;