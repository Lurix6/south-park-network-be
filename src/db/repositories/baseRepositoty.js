
class BaseRepository {
  constructor(source) {
    this.source = source,
    this.sourceName = source.name
  }

  async getAll({
    filters, sorters, pagination, options,
  } = {}){
    const result = {
      pagination: null,
    };

    const items = await this.source.findAll(options);
    result.items = items;

    return result
  }

  async createEntity(entity, options) {
    return this.source.create(entity, options);
  }

}

module.exports = BaseRepository