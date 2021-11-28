const express = require('express')
const Controller = require('../../controllers/product/product.native.controller')

const router = express.Router()
const controller = new Controller()

router.get(
  '/',
  controller.getProducts
)

router.get(
  '/:id',
  controller.getProductById
)

module.exports = router