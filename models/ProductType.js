const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  image: {
    type: String,
    default: 'no-image.png'
  }
})

module.exports = mongoose.model('Product-Type', schema)