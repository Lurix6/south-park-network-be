const router = require('express').Router()
const { UserControler } = require('../controllers')
const authModleware = require('../../middleware/auth')
const { UserUpload } = require('../expressConfigs/multerConfig');

const upload = UserUpload();

router.post('/registration', UserControler.registerUser)
router.post('/login', UserControler.login)
router.get('/current', authModleware, UserControler.getCurrent)
router.post('/updateAvatar', authModleware, upload.single('img'), UserControler.updateUserAvatar)

module.exports = router