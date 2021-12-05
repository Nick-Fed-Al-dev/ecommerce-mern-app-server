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
          message: 'INCORRECT REGISTRATION DATA',
        })
      }

      const {email, password} = req.body

      const user = await User.findOne({email})

      if(!user){
        return res
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
      const tokenDurationMin = config.get('jwtDuration')
      const today = new Date()
      const todayYearSecs = today.getFullYear()*12*30*24*60*60
      const todayMonthSecs = today.getMonth()*30*24*60*60
      const todayDaySecs = today.getDate()*24*60*60
      const todayHourSecs = today.getHours()*60*60
      const todayMinSecs = today.getMinutes()*60
      const todaySecs = today.getSeconds()

      const payload = {
        userId: user.id,
        role: user.role
      }

      const token = jwt.sign(
        payload,
        config.get('secretWord'),
        {
          expiresIn: tokenDurationMin + 'm'
        }
      )

      res
      .status(201)
      .json({
        status: 201,
        message: 'USER AUTHENTICATION SUCCESS',
        user: {
          token,
          ...payload,
          tokenSignTimeSec: todayYearSecs + todayMonthSecs + todayDaySecs + todayHourSecs + todayMinSecs + todaySecs,
          tokenDurationSec: tokenDurationMin*60
        },
      })
    } catch (e) {
      res.status(500).json({status: 500, message: e.message})
    }
  }

}

module.exports = UserAuthController