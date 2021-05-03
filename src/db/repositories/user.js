const BaseRepository = require('./baseRepositoty')

class UserRepository extends BaseRepository {

  async findUserByUserName(userName) {
    console.log('findUserByUserName')
    const user = await this.source.findOne({
      where: {
        userName,
      },
      // include: [xw
      //   {
      //     model: models.Role,
      //     include: [{ model: models.Claim, through: { attributes: [] } }],
      //   },
      // ],
    });
    return user;
  }}

module.exports = UserRepository