/*
 * Super Server
 */

import {env, server, mongo} from './config'
import mongoose from './config/mongoose'
import express from './config/express'
import routes from './routes'

const app = express(routes)

mongoose.connect(mongo.uri)

setImmediate(() => {
  app.listen(server.port, server.host, () => {
    console.log(`*** SUPER SERVER API NODE ***`)
    console.log(`ONLINE: http://${server.host}:${server.port}`)
    console.log(`MODE: ${env}`)
  })
})

// export app to be used by index.js
module.exports = app
