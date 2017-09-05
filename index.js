'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// setting up envrioment variables
require('dotenv').config()

// connecting data base
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})

// configuring our app
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// pulling up our routes
const cat = require('./cats')(app)

// running our server
const server = app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/')
})
