const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: String,
    /*_user*/
    users: {
      type: [{type: Schema.Types.ObjectId, ref: 'User'}],
      default: [
        {
          'type': Schema.Types.ObjectId,
          'ref': "User"
        }
      ]
    },
    clothes: [{type: Schema.Types.ObjectId, ref: 'Garment'}],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
