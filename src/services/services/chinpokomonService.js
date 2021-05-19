class ChinpokomonService {
  constructor(chinpokomonRepository) {
    this.chinpokomonRepository = chinpokomonRepository;
  }

  async getAll() {
    return this.chinpokomonRepository.getAll()
  }

  async create(entity) {
    return this.chinpokomonRepository.createEntity(entity)
  }

  async getById(id) {
    return this.chinpokomonRepository.getById(id)
  }
}

module.exports = ChinpokomonService;
