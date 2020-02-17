const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bear in mind, no authentication here
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
});

module.exports = mongoose.model('User', UserSchema);
