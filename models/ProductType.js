const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  rus: {
    required: true,
    type: String
  },
  eng: {
    required: true,
    type: String
  },
  image: {
    type: String,
    default: 'no-image.png'
  }
})

module.exports = mongoose.model('Product-Type', schema)