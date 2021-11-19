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

  image: {
    type: String,
    default: 'non-image.png'
  },

  rating: {
    type: Number,
    default: 0
  },
})

module.exports = mongoose.model('Product', schema)