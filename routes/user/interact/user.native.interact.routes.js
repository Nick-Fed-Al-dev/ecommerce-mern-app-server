const express = require('express')
const Controller = require('../../../controllers/user/interact/user.native.interact.controller')

const router = express.Router()
const controller = new Controller()

router.get('/:id', controller.getUserById)

router.patch('/:id', controller.changeUserById)

module.exports = router