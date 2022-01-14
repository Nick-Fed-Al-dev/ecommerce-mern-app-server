const mongoose = require("mongoose");

const schema = new mongoose.Schema({

  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },

  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
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

  replies: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Reply'
    }
  ]

})

module.exports = mongoose.model('Review', schema)