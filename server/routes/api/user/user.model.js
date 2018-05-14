const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  birthday: Date,
  city: String,
  /*image*/
  notifications: {
    type: Array,
    default: []
  },
  events: {
    type: Array,
    default: []
  },
  groups: {
    type: Array,
    default: []
  },
  favslists: {
    type: Array,
    default: []
  },
  clothes: {
    type: Array,
    default: []
  },
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