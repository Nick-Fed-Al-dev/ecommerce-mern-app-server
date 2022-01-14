const express = require('express')

const router = express.Router()

router.use('/native', require('./user.native.interact.routes'))
router.use('/admin', require('./user.admin.interact.routes'))

module.exports = router