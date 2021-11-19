const express = require('express')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.use('/native', require('./product.native.routes'))
router.use('/admin', require('./product.admin.routes'))

module.exports = router