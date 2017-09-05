'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const cat = require('./cats')(app)


const server = app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/')
})
