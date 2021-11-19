const express = require('express')
const adminMiddleware = require('../../middlewares/admin.middleware')
const ProductAdminController = require('../../controllers/product/product.admin.controller')

const router = express.Router()
const controller = new ProductAdminController()

router.use(adminMiddleware)

router.get('/', controller.getProducts)

router.get('/:id', controller.getProductById)

router.post('/', controller.createProduct)

router.patch('/:id', controller.changeProductById)

router.delete('/:id', controller.deleteProductById)

module.exports = router