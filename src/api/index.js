const { UserRouter } = require('./routes')
const { AuthRouter } = require('./routes')

function registerApi(app) {
  app.use('/user', UserRouter)
  app.use('/auth', AuthRouter)

}

module.exports = registerApi