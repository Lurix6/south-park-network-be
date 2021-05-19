const ServicesFactory = require('../../services');

async function getUsers(req, res, next){
  const userServices = ServicesFactory.createUserFactory()
  const result = await userServices.getAll()
  res.send(result.items)
}

async function getUser(req, res, next){

}

async function registerUser(req, res, next){
  const authService = ServicesFactory.createUserFactory()
  const { userName, password, remember } = req.body;
  const a = await authService.register(userName, password)
  res.send(a)
}

async function login(req, res, next){
  const authService = ServicesFactory.createUserFactory()
  const { userName, password, remember } = req.body;
  const a = await authService.login(userName, password)
  res.send(a)
}

module.exports = { getUsers, registerUser, login }