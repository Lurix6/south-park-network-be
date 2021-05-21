const { UserRouter } = require('./routes')
const { AuthRouter } = require('./routes')
const { BaseRoute } = require('./')
const { CollectiblesRouter } = require('./routes')

function registerApi(app) {
  app.use('/user', UserRouter)
  app.use('/user', UserRouter)
  app.use('/auth', AuthRouter)
  app.use('/collectibles', CollectiblesRouter)
}

module.exports = registerApi