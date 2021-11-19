const express = require('express')
const validator = require('express-validator')
const AuthController = require('../../controllers/user/user.auth.controller')

const router = express.Router()

const controller = new AuthController()

router.post(
  '/registrate',
  [
    validator.check("email", "ENTER EMAIL IN CORRECT FORMAT").isEmail(),
		validator.check("password", "PASSWORD MIN LENGTH 6").isLength({ min: 6 }),
  ],
  controller.registrate
)

router.post(
  '/login',
  [
    validator
    .check("email", "ENTER EMAIL IN CORRECT FORMAT")
    .normalizeEmail()
    .isEmail(),
  validator.check("password", "PASSWORD MIN LENGTH 6").isLength({ min: 6 }),
  ],
  controller.login
)

module.exports = router