const express = require('express')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.use('/native', require('./reviews.native.routes'))
router.use('/admin', require('./reviews.admin.routes'))

module.exports = router