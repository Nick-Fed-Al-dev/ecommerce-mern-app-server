const express = require('express')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.use('/native', require('./productType.native.routes'))
router.use('/admin', require('./productType.admin.routes'))

module.exports = router