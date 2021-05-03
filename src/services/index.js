const { RepositoriesFactory } = require('../db');
const AuthService = require('./services/authService');

class ServicesFactory {
  constructor(repositoriesFactory){
    this.repositoriesFactory = repositoriesFactory
  }

  createUserFactory() {
    const userRepository = this.repositoriesFactory.createUserRepository()
    return new AuthService(userRepository)
  }
}

module.exports = new ServicesFactory(RepositoriesFactory)