const express = require('express')
const Controller = require('../../controllers/reviews/reviews.native.controller')
const authMiddleware = require('../../middlewares/auth.middleware')

const router = express.Router()
const controller = new Controller

router.get('/', controller.getReviews)

router.post('/', authMiddleware, controller.pushReview)

router.patch('/:id', authMiddleware, controller.updateReview)

router.delete('/:id', authMiddleware, controller.deleteReview)

module.exports = router