const ServicesFactory = require('../../services');

async function getChinpokomons(req, res, next){
  const chinpokomonService = ServicesFactory.createChinpokomonFactory()

  const result = await chinpokomonService.getAll()

  res.send(result)
}

async function getChinpokomon(req, res, next){
  const chinpokomonService = ServicesFactory.createChinpokomonFactory()
  const { id } = req.params
  const result = await chinpokomonService.getById(id);

  res.send(result)
}

async function createChinpokomon(req, res, next){
  const chinpokomonService = ServicesFactory.createChinpokomonFactory()
  const { body: { name, location }, file: { path } } = req;
  const result = await chinpokomonService.create({name, location, img: path})
  
  res.send(result)
}

module.exports = { getChinpokomons, createChinpokomon, getChinpokomon }