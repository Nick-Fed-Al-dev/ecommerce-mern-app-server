const express = require('express')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.use('/native', require('./replies.native.routes'))
router.use('/admin', require('./replies.admin.routes'))

module.exports = router