const router = require('express').Router()
const { UserControler } = require('../controllers')

router.post('/registration', UserControler.registerUser)

router.post('/login', UserControler.login)


module.exports = router