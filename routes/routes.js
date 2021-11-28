const express = require('express')

const router = express.Router()

router.use('/user', require('./user/user.routes'))
router.use('/product', require('./product/product.routes'))
router.use('/productType', require('./productTypes/productType.routes'))

module.exports = router