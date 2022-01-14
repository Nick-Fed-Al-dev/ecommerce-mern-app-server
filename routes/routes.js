const express = require('express')

const router = express.Router()

router.use('/user', require('./user/user.routes'))
router.use('/product', require('./product/product.routes'))
router.use('/productType', require('./productTypes/productType.routes'))
router.use('/reviews', require('./reviews/reviews.routes'))
router.use('/replies', require('./replies/replies.routes'))

module.exports = router