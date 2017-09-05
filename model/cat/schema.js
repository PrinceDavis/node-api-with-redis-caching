'use strict'
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: String,
  age: Number,
  type: String
})

module.exports = Schema