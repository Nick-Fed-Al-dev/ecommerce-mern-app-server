const express = require('express')

const router = express.Router()

router.use('/native', require('./productType.native.routes'))
router.use('/admin', require('./productType.admin.routes'))

module.exports = router