const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  img: {
    type: String,
    require: true
  }
})

module.exports = model('Chinpikomon', schema)