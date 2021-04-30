const {
  UserRouter
} = require('./routes')


function registerApi(app) {
  app.use('/user', UserRouter)
}

module.exports = registerApi