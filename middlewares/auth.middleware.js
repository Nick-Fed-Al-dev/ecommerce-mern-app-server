const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ status: 401, message: 'NO AUTHORIZATION' })
    }

    const decoded = jwt.verify(token, config.get('secretWord'))
    req.body.user = decoded
    next()

  } catch (e) {
    res.status(400).json({ status: 400, message: 'NO AUTHORIZATION', error: e.message })
  }
}