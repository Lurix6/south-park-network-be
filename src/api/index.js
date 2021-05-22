const authMidleware = require('../middleware/auth')
const { UserRouter } = require('./routes')
const { AuthRouter } = require('./routes')
const { BaseRouter } = require('./routes')
const { CollectiblesRouter } = require('./routes')

function registerApi(app) {
  app.use('/', BaseRouter)
  app.use('/user', authMidleware, UserRouter)
  app.use('/auth', AuthRouter)
  app.use('/collectibles', CollectiblesRouter)
}

module.exports = registerApi