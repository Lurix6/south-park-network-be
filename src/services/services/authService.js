const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/config')


generateAccessToke = (id) => {
  const paylod = { id };

  return jwt.sign(paylod, secret, { expiresIn: '24h' })
}

class AuthorizationService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(userName, password) {
    const user = await this.userRepository.findUserByUserName(userName);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    if (user) {
      return new Error('dasjjj')
    }

    const a = await this.userRepository.createEntity({
      userName,
      salt,
      password: hash,
      firstName: '',
      lastName: '',
      gender: '',
    })

    console.log(a)

  }

  async login(userName, password) {
    const user = await this.userRepository.findUserByUserName(userName);

    if (!user) {
      return new Error('Cn\'t find user')
    }

    const validPasword = bcrypt.compareSync(password, user.password)

    if (!validPasword) {
      return new Error('Wrong password')
    }

    const token = generateAccessToke(user.id);
    return token
  }
}

module.exports = AuthorizationService;
