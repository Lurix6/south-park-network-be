const UserReposetory = require('./user')
const sequelizeDB = require('../models')

class RepositortFactory {
  constructor(db){
    this.db = db
  }

  createUserReposetory() {
    return new UserReposetory(this.db.user)
  }
}

module.exports = new RepositortFactory(sequelizeDB)