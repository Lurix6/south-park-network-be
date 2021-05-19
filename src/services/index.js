const { RepositoriesFactory } = require('../db');
const AuthService = require('./services/authService');
const ChinpokomonService = require('./services/chinpokomonService');

class ServicesFactory {
  constructor(repositoriesFactory){
    this.repositoriesFactory = repositoriesFactory
  }

  createUserFactory() {
    const userRepository = this.repositoriesFactory.createUserRepository()
    return new AuthService(userRepository)
  }

  createChinpokomonFactory() {
    const chinpokomonService = this.repositoriesFactory.createChinpokomonRepository()
    return new ChinpokomonService(chinpokomonService)
  }
}

module.exports = new ServicesFactory(RepositoriesFactory)