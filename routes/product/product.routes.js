const express = require('express')

const router = express.Router()

router.use('/native', require('./product.native.routes'))

module.exports = router