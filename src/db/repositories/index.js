const UserReposetory = require('./user')
const ChinpokomonReposetory = require('./chinpokomon')
const sequelizeDB = require('../models')

class RepositortFactory {
  constructor(db){
    this.db = db
  }

  createUserRepository() {
    return new UserReposetory(this.db.User)
  }

  createChinpokomonRepository() {
    return new ChinpokomonReposetory(this.db.Chinpokomon)
  }
}

module.exports = new RepositortFactory(sequelizeDB)