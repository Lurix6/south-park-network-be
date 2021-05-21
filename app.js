const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const app = express()
const registerApi = require('./src/api')

app.use('/uploads',express.static('uploads'))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
}

mongoose.connect('mongodb+srv://root:qwerty123!@cluster0.1v28u.mongodb.net/southParkNetwork', options)
.then(() => {
  console.log('MongoDB connected')
  registerApi(app)
  app.listen(port)
})
.catch((e) => {
  console.error(e)
})
