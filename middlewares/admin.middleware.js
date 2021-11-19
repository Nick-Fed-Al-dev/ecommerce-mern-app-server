const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {

  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    if(req.body.user.role !== 'ADMIN'){
      return res.status(401).json({ status: 401, message: 'NO ACCESS' })
    }

    next()

  } catch (e) {
    res.status(401).json({ status: 401, message: 'AUTHORIZATION ERROR' })
  }
}