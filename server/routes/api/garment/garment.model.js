const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garmentSchema = new Schema(
  {
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    photo: {
      type: String,
      default: 'http://memorabledecor.com/wp-content/uploads/2016/01/california-closets-Closet-Contemporary-with-island-ceiling-lighting-22.jpg'
    },
    size: String,
    brand: String,
    kind: String,
    description: String,
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