const router = require('express').Router()
const { UserControler } = require('../controllers')

router.get('/current', UserControler.getCurrent)
router.get('/:id', UserControler.getUser)

module.exports = router