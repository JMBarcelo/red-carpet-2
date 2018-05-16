const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garmentSchema = new Schema(
  {
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    /*photo*/
    size: String,
    brand: String,
    kind: String,
    /*color*/
    dates: {
      type : Array,
      default: []
    },
    borrower: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Garment = mongoose.model("Garment", garmentSchema);
module.exports = Garment;