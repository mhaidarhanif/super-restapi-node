import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from './'

export default (routes) => {
  const app = express()

  /* istanbul ignore next */
  if (env === 'development' || env === 'production') {
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
  }

  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(morgan('combined', {
    skip: function (req, res) {
      return res.statusCode < 400
    }
  }))
  app.use('/', routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}
