
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    const options = {
      sequelize,
      createdAt: false,
      updatedAt: false,
      modelName: 'Chinpokomon',
    }
  
    class Chinpokomon extends Model {
      updateModel(chinpokomon) {
        this.name = chinpokomon.name || this.name;
        this.location = chinpokomon.location || this.location;
        this.img = chinpokomon.img || this.img;
      }
    }
  
    Chinpokomon.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        img: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      options,
    )
  
    return Chinpokomon
  }