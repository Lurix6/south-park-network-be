const Chinpokomon = require('../../db/models/Chinpokomon');
const { ObjectId } = require('mongodb'); 

async function getChinpokomons(req, res, next){
  const result = await Chinpokomon.find({})

  res.send(result)
}

async function getChinpokomon(req, res, next){
  const { id } = req.params
  const result = await Chinpokomon.find({_id: new ObjectId(id)})

  res.send(result)
}

async function createChinpokomon(req, res, next){
  try {
    const { body: { name, location }, file: { path } } = req
    const chinpokomon = new Chinpokomon({name, location, img: path})
    await chinpokomon.save()
    res.send(chinpokomon)
  } catch (error) {
    res.status(500).json({message: error})
  }

}

module.exports = { getChinpokomons, createChinpokomon, getChinpokomon }