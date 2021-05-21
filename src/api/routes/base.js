const router = require('express').Router()

router.get('/', async (req, res, next) => {
  res.send(`<div>Hello My Friend</div>`)
});


module.exports = router