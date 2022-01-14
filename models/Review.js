const mongoose = require("mongoose");

const schema = new mongoose.Schema({

  owner: {
    type: Object,
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

})

module.exports = mongoose.model('Review', schema)