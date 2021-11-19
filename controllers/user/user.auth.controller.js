const validator = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/User')

class UserAuthController{

  async registrate(req, res){
    try {
      const errors = validator.validationResult(req)

      if(!errors.isEmpty()){
        return res
        .status(401)
        .json({
          status: 401,
          errors: errors.array(),
          message: 'INCORRECT REGISTRATION DATA'
        })
      }

      const {email, password} = req.body

      const candidate = await User.findOne({email})

      if(candidate){
        res
        .status(401)
        .json({
          status: 401,
          message: 'USER WITH THIS EMAIL ALREADY EXISTS'
        })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = new User({email, password: hashedPassword})
      await user.save()

      res
      .status(201)
      .json({
        status: 201,
        message: 'USER CREATION SUCCESS'
      })

    } catch (e) {
      res.status(500).json({status: 500, message: e.message})
    }
  }

  async login(req, res){
    try {
      const errors = validator.validationResult(req)

      if(!errors.isEmpty()){
        return res
        .status(401)
        .json({
          status: 401,
          errors: errors.array(),
          message: 'INCORRECT REGISTRATION DATA'
        })
      }

      const {email, password} = req.body

      const user = await User.findOne({email})

      if(!user){
        res
        .status(404)
        .json({
          status: 404,
          message: 'USER NOT FOUND'
        })
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password)

      if(!isPasswordMatch){
        res
        .status(401)
        .json({
          status: 401, 
          message: 'INCORRECT PASSWORD'
        })
      }

      const payload = {
        userId: user.id,
        role: user.role
      }

      const token = jwt.sign(
        payload,
        config.get('secretWord'),
        {
          expiresIn: '5m'
        }
      )

      res
      .status(201)
      .json({
        status: 201,
        message: 'USER AUTHENTICATION SUCCESS',
        user: {
          token,
          payload
        },
      })
    } catch (e) {
      res.status(500).json({status: 500, message: e.message})
    }
  }

}

module.exports = UserAuthController