const express = require('express')
const Controller = require('../../controllers/replies/replies.native.controller')

const router = express.Router()
const controller = new Controller

router.get('/', controller.getReplies)

router.post('/', controller.pushReply)

router.patch('/:id', controller.updateReply)

router.delete('/:id', controller.deleteReply)

module.exports = router