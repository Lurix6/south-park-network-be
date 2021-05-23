const router = require('express').Router()
const { UserControler } = require('../controllers')
const authModleware = require('../../middleware/auth')

router.post('/registration', UserControler.registerUser)
router.post('/login', UserControler.login)
router.get('/current',authModleware, UserControler.getCurrent)

module.exports = router