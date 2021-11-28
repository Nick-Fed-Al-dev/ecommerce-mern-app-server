const express = require('express')
const Controller = require('../../controllers/productType/productType.native.controller')

const router = express.Router()
const controller = new Controller()

router.get('/', controller.getProductTypes)

module.exports = router