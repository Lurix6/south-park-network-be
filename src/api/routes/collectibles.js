const router = require('express').Router()
const ChinpokomonRouter = require('./chinpokomon')

router.use('/chinpokomons', ChinpokomonRouter)

module.exports = router