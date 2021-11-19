const express = require('express')
const NativeInteractController = require('../../../controllers/user/interact/user.native.interact.controller')

const router = express.Router()
const controller = new NativeInteractController()

router.patch('/:id', controller.changeUserById)

module.exports = router