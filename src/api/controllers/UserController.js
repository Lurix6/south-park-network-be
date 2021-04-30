const { response } = require('express');
const ServicesFactory = require('../../services');

async function getUsers(req, res, next){
  const userServices = ServicesFactory.createUserFactory()
  const result = await userServices.getAll()
  res.send(result.items)
}
