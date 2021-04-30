const router = require('express').Router()
const {} = require('../controllers')

router.get('/current', async (req, res) => {
  res.send('getCurrent')
})

module.exports = router