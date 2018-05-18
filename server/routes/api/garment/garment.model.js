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
      default: 'https://gloimg.gamcdn.com/G/pdm-product-pic/Clothing/2016/10/26/source-img/20161026155657_37147.jpg'
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