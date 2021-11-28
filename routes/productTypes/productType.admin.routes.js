const express = require('express')
const adminMiddleware = require('../../middlewares/admin.middleware')
const Controller = require('../../controllers/productType/productType.admin.controller')

const router = express.Router()
const controller = new Controller()

router.use(adminMiddleware)

router.get('/', controller.getProductTypes)

router.post('/', controller.createProductType)

router.patch('/:id', controller.updateProductType)

router.delete('/:id', controller.removeProductType)

module.exports = router