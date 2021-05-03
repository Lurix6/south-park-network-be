const UserReposetory = require('./user')
const sequelizeDB = require('../models')

class RepositortFactory {
  constructor(db){
    this.db = db
  }

  createUserRepository() {
    return new UserReposetory(this.db.User)
  }
}

module.exports = new RepositortFactory(sequelizeDB)