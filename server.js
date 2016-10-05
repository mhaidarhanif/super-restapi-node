const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bluebird = require('bluebird')

const config = require('./config')
const routes = require('./routes')

const app = express()

mongoose.Promise = bluebird
mongoose.connect(config.mongo.url)

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/', routes)

app.listen(config.server.port, config.server.host, () => {
  console.log(`super-server-api running on ${config.server.host}:${config.server.port}`)
})

module.exports = app
