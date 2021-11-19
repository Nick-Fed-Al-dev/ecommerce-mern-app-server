const express = require('express')
const NativeProductController = require('../../controllers/product/product.native.controller')

const router = express.Router()
const controller = new NativeProductController()

router.get(
  '/',
  controller.getProducts
)

router.get(
  '/:id',
  controller.getProductById
)

module.exports = router