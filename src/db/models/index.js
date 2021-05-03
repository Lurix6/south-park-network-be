const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const config = require('../../config/config.json')['dev']
const User = require('./User')
const db = {};

const basename = path.basename(__filename);

const options = {
  ...config,
  logging: (msg) => console.log(''),
  define: {
    paranoid: true,
    timestamps: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
		dialectOptions: {
			timezone: "local",
    }
}
const sequelize =  new Sequelize(config.database, config.username, config.password, options)

fs.readdirSync(__dirname)
.filter(
  (file) => file.indexOf('.') !== 0
    && file !== basename
    && file.slice(-3) === '.js'
    && !fs.lstatSync(path.join(__dirname, file)).isDirectory(),
).forEach((file) => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  const titleCaseName = model.name[0].toUpperCase() + model.name.slice(1);
  db[titleCaseName] = model;
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db