const express = require('express')

const router = express.Router()

router.use('/auth', require('./user.auth.routes'))
router.use('/interact', require('./interact/user.interact.js'))

module.exports = router