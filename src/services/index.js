const { RepositoriesFactory } = require('../db');

class ServicesFactory {
  constructor(repositoriesFactory){
    this.repositoriesFactory = repositoriesFactory
  }

  createUserFactory() {
    return this.repositoriesFactory(this.createUserFactory)
  }
}

module.exports = ServicesFactory(RepositoriesFactory)