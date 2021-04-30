const { Sequelize } = require('sequelize');
const config = require('../../config/config.json')['dev']
const user = require('./User')
const db = {};

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

db.user = user 
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db