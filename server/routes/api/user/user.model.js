const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  birthday: Date,
  city: String,
  /*image*/
  notifications: [{type: Schema.Types.ObjectId, ref: 'Notification'}],
  events: [{type: Schema.Types.ObjectId, ref: 'Meeting'}],
  groups: [{type: Schema.Types.ObjectId, ref: 'Group'}],
  favslists: [{type: Schema.Types.ObjectId, ref: 'Favslist'}],
  clothes: [{type: Schema.Types.ObjectId, ref: 'Garment'}],
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;