const router = require('express').Router()
const { UserControler } = require('../controllers')

router.get('/registration', UserControler.registerUser)

router.get('/login', UserControler.login)


module.exports = router