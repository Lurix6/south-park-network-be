const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  chinpokomons: [{
    type: Types.ObjectId, ref: 'Chinpokomon'
  }]
})

module.exports = model('User', schema)