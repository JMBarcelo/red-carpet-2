const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favslistSchema = new Schema(
  {
    title: String,
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    clothes: {
      type: Array,
      default: []
    },
    color: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Favslist = mongoose.model("Favslist", favslistSchema);
module.exports = Favslist;
