const express = require('express')
const adminMiddleware = require('../../../middlewares/admin.middleware')
const Controller = require('../../../controllers/user/interact/user.admin.interact.controller')
const authMiddleware = require('../../../middlewares/auth.middleware')

const router = express.Router()
const controller = new Controller()

router.use(authMiddleware)
router.use(adminMiddleware)

router.get('/', controller.getUsers)

router.get('/:id', controller.getUserById)

router.patch('/:id', controller.changeUserById)

router.delete('/:id', controller.removeUserById)

module.exports = router