const bodyParser = require('body-parser')
const express = require('express')
const { db } = require('./src/db');
const port = 5000
const app = express()
const registerApi = require('./src/api')

// Use Node.js body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/uploads',express.static('uploads'))

registerApi(app)

db.sequelize.sync().then(() => {
}).then(() => {
  app.listen(port)
});