const express = require('express')
const adminMiddleware = require('../../middlewares/admin.middleware')

const router = express.Router()

router.use(adminMiddleware)

module.exports = router