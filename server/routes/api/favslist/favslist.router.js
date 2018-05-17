const express = require("express");
const passport = require("passport");
const crud = require("../../crud");
const Favslist = require("./favslist.model");

const router = crud(Favslist);

router.get("/", (req, res, next) => {
  Favslist.find({'_user' : res.locals.user._id})
    .populate('clothes')
    .populate('brand.clothes')
    .populate('kind.clothes')
    .populate('size.clothes')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/tofavslist/:id", (req, res, next) => {
  Favslist.findById(req.params.id).update({$addToSet:{clothes:req.body.garment}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.get("/garment/:id", (req, res, next) => {
  Favslist.findById(req.params.id)
  .populate('clothes', 'kind')
  .populate('clothes', 'size')
  .populate('clothes', 'brand')
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

router.put("/outfavslist/:id", (req, res, next) => {
  Favslist.findById(req.params.id).update({$pull:{clothes:req.body.garment}, obj:true})
    .then(objects => res.json(objects))
    .catch(e => next(e));
});

module.exports = router;