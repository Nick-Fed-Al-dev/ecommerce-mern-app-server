const express = require('express')
const Controller = require('../../controllers/reviews/reviews.native.controller')

const router = express.Router()
const controller = new Controller

router.get('/', controller.getReviews)

router.post('/', controller.pushReview)

router.patch('/:id', controller.updateReview)

router.delete('/:id', controller.deleteReview)

module.exports = router