const express = require('express')

const router = express.Router()

router.use('/native', require('./productType.native.routes'))

module.exports = router