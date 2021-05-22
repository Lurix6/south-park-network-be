const { User } = require('../../db/models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')

async function getCurrent(req, res, next){
  const user = await User.findById(req.user.userId, {password: 0})
  res.send(user)
}

async function getUser(req, res, next){
  res.send('getUser')
}

async function registerUser(req, res, next){
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({email})

    if(candidate) {
      res.status(400).json({message: 'Email alrady exist'})
    }

    const hashPassword = await bcrypt.hash(password, 12)
    const user = new  User({email, password: hashPassword})

    await user.save()
    res.status(400).json({message: 'User was created!!'})

  } catch (error) {
    res.status(500).json({message: error})
  }
}

async function login(req, res, next){
  const { email, password } = req.body;
  const user = await User.findOne({email})

  if(!user) {
    res.status(400).json({message: 'Cannot find User'})
  }

  const isMatch = bcrypt.compare(password, user.password)

  if(!isMatch) {
    res.status(400).json({message: 'Incorrect Password, please try again!'})
  }

  const { id } = user;
  const token = jwt.sign({ userId: id },
    secret,
    { expiresIn: '1h' }
  )
   res.json({token})
}

module.exports = { getCurrent, getUser, registerUser, login }