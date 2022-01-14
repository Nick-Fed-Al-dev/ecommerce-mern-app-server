const mongoose = require("mongoose");

const schema = mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },

  root: {
    type: mongoose.Types.ObjectId,
    ref: 'Review',
    required: true
  },

  text: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Reply', schema)