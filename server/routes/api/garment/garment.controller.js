const express = require("express");
const router = express.Router();
const Garment = require("./garment.model");
const loggedIn = require("../../isAuth");

const getAll = (req, res, next) => {
  Garment.find({})
    .populate("_user")
    .exec((err, clothes) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json(clothes);
    });
};

const getGarment = (req, res, next) => {
  Garment.findById(req.params.id)
    .populate("_user")
    .exec((err, garment) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (!garment) {
        return res.status(404).json(err);
      }

      return res.status(200).json(garment);
    });
};

const create = (req, res, next) => {
  if (loggedIn) {
    const newGarment = new Garments({
      _user: req.user._id,
      //photo
      size: req.body.size,
      brand: req.body.brand,
      kind: req.body.kind,
    });

    newGarment.save(err => {
      if (err) {
        return res.status(500).json(err);
      }
      if (newGarment.errors) {
        return res.status(400).json(newGarment);
      }

      return res.status(200).json(newGarment);
    });    
  }
};

module.exports = router;
