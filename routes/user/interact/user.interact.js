const express = require('express')
const authMiddleware = require('../../../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.use('/native', require('./user.native.interact.routes'))
router.use('/admin', require('./user.admin.interact.routes'))

module.exports = router