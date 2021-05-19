const router = require('express').Router()
const { ChinpokomonUpload } = require('../expressConfigs/multerConfig');
const ChinpokomonController = require('../controllers/ChinpokomonController')

const upload = ChinpokomonUpload();

router.get('/', ChinpokomonController.getChinpokomons)

router.get('/:id', ChinpokomonController.getChinpokomon) 

router.put('/', upload.single('avatar'), ChinpokomonController.createChinpokomon)


module.exports = router