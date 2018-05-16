const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adviceAcceptSchema = new Schema(
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
    daymeeting: Date,
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

const AdviceAccept = mongoose.model("AdviceAccept", adviceAcceptSchema);
module.exports = AdviceAccept;