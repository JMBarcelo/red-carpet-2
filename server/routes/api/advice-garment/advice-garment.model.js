const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adviceGarmentSchema = new Schema(
  {
    _sender: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    _receiver: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    _garment: {
      type: Schema.Types.ObjectId,
      ref: "Garment"
    },
    _meeting: {
      type: Schema.Types.ObjectId,
      ref: "Meeting"
    },
    datemeeting: Date,
    daysbefore: Number,
    daysafter: Number,
    message: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const AdviceGarment = mongoose.model("AdviceGarment", adviceGarmentSchema);
module.exports = AdviceGarment;