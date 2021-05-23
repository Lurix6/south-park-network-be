const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  avatarUrl: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  netWorth: {
    type: Number,
    required: false,
    default: 0,
  },
  level: {
    type: Number,
    required: false,
    default: 1
  },
  experience: {
    type: Number,
    required: false
  },
  hp: {
    type: Number,
    required: false,
    default: 100
  },
  mana: {
    type: Number,
    required: false,
    default: 100
  },
  hpMax: {
    type: Number,
    required: false,
    default: 100
  },
  manaMax: {
    type: Number,
    required: false,
    default: 100
  },
  xp: {
    type: Object,
    required: false,
    default: {
      current: 0,
      max: 150
    } 
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
  }],
  friends: [{
    type: Types.ObjectId, ref: 'User'
  }]
})

module.exports = model('User', schema)