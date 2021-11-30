const express = require('express')
const adminMiddleware = require('../../middlewares/admin.middleware')
const Controller = require('../../controllers/product/product.admin.controller')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()
const controller = new Controller()

router.use(authMiddleware)
router.use(adminMiddleware)

router.get('/', controller.getProducts)

router.get('/:id', controller.getProductById)

router.post('/', controller.createProduct)

router.patch('/:id', controller.changeProductById)

router.delete('/:id', controller.deleteProductById)

module.exports = router