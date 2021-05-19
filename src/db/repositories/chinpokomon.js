const BaseRepository = require('./baseRepositoty')

class ChinpokomonRepository extends BaseRepository {

  async getById(id) {
    const options = {
      include: [{ all: true }],
      attributes: ['id', 'name', 'location', 'img'],
    };
    return this.source.findByPk(id, options);
  }

  async getAll() {
    const options = {
      include: [{ all: true }],
      attributes: ['id', 'name', 'location', 'img'],
    };

    return this.source.findAll(options)
  }
}

module.exports = ChinpokomonRepository