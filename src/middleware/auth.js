const jwt = require('jsonwebtoken')
const {secret} = require('../config/config')

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] 
    if (!token) {
      return res.status(401).json({message: 'No authorizen!'})
    }
    const decoded = jwt.verify(token, secret)
    req.user = decoded
    next()

  } catch (error) {
    return res.status(401).json({message: 'No authorizen!'})
  }
}