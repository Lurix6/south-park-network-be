
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    const options = {
      sequelize,
      createdAt: false,
      updatedAt: false,
      modelName: 'Chinpokomon',
    }
  
    class User extends Model {
      updateModel(user) {
        this.firstName = user.firstName || this.firstName;
        this.lastName = user.lastName || this.lastName;
        this.userName = user.userName || this.userName;
        this.roleId = user.roleId || this.roleId;
        this.password = user.password || this.password;
        this.salt = user.salt || this.salt;
        this.resetPasswordToken = user.resetPasswordToken || this.resetPasswordToken;
        this.gender = user.gender || this.gender
      }
    }
  
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        salt: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      options,
    )
  
    return User
  }