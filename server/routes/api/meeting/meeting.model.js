const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema(
  {
    name: String,
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    clothes: [{type: Schema.Types.ObjectId, ref: 'Garment'}],
    date: Date,
    place: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Meeting = mongoose.model("Meeting", meetingSchema);
module.exports = Meeting;
