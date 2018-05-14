const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    _sender: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    _receiver: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    message: String,
    /*_group, accept/reject, garment, days_after, days_before*/
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
