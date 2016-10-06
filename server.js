/*
 * Super Server
 */

import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import bluebird from 'bluebird'

import routes from './routes'
import { env, server, mongo } from './config'

const app = express()

mongoose.Promise = bluebird
mongoose.connect(mongo.uri)

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/', routes)

setImmediate(() => {
  // app.listen(port, ip, () => {
  //   console.log('Express app listening on http://%s:%d, in %s mode', ip, port, env)
  // })
  app.listen(server.port, server.host, () => {
    console.log(`*** SUPER SERVER API NODE ***`)
    console.log(`RUN ON: ${server.host}:${server.port}`)
    console.log(`MODE: ${env}`)
  })
})

// export app to be used by index.js
module.exports = app

