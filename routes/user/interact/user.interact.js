const express = require('express')

const router = express.Router()

router.use('/native', require('./user.native.interact.routes'))

module.exports = router