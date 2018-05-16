const express = require("express");
const _ = require("lodash");

const simpleCrud = Model => {
  const router = express.Router();
  const fields = Object.keys(_.omit(Model.schema.paths, ["__v", "_id"]));

  // RETRIVE ALL
  // router.get("/", (req, res, next) => {
  //   Model.find({'_user' : res.locals.user._id})
  //     .then(objects => res.json(objects))
  //     .catch(e => next(e));
  // });

  // CREATE
  router.post("/", (req, res, next) => {
    const obj = _.pick(req.body, fields);
    Model.create(obj)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // RETRIVE
  router.get("/:id", (req, res, next) => {
    Model.findById(req.params.id)
      .then(object =>res.json(object))
      .catch(e => next(e));
  });

  // UPDATE
  router.put("/:id", (req, res, next) => {
    const updates = _.pick(req.body, fields);
    Model.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // DELETE
  router.delete("/:id", (req, res, next) => {
    Model.findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
      .catch(e => next(e));
  });

  return router;
};
module.exports = simpleCrud;