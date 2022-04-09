const express = require('express')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()

router.use('/native', require('./reviews.native.routes'))

module.exports = router