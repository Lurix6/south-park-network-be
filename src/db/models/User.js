
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.sequelize.Model
  const options = {
    sequelize,
    modelName: 'user',
    createdAt: false,
    updatedAt: false,
  }

  class User extends Model {
    updateModel(user) {
      this.firstName = user.firstName || this.firstName;
      this.lastName = user.lastName || this.lastName;
      this.email = user.email || this.email;
      this.roleId = user.roleId || this.roleId;
      this.password = user.password || this.password;
      this.salt = user.salt || this.salt;
      this.resetPasswordToken = user.resetPasswordToken || this.resetPasswordToken;
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    options,
  )

  return User
}