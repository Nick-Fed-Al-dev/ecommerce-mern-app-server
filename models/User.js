const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true
  }, 

  password: {
    required: true,
    type: String
  },

  products:{
    type: Array,
    default: [] 
  },

  role: {
    type: String,
    default: 'NATIVE'
  },

  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Review'
    }
  ]

})

module.exports = mongoose.model('User', schema)