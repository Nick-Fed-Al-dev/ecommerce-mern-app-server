const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  type: {
    type: String,
    required: true,
    ref: 'Product-Type'
  },

  description: {
    type: String,
    required: true
  },

  properties: {
    type: Array,
    required: true
  },

  image: {
    type: String,
    default: 'no-image.png'
  },

})

module.exports = mongoose.model('Product', schema)