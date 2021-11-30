const express = require('express')

const router = express.Router()

router.use('/native', require('./product.native.routes'))
router.use('/admin', require('./product.admin.routes'))

module.exports = router