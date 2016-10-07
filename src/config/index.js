/* eslint-disable */

/*
 * Super Config
 */

/* eslint-disable no-unused-vars */
import path from 'path'
import _ from 'lodash'

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  const dotenv = require('dotenv-safe')
  dotenv.load({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example')
  })
}

const config = {
  all: {
    root: path.join(__dirname, '../../'),
    env: process.env.NODE_ENV || 'development',
    server: {
      host: process.env.HOST || 'localhost' || '0.0.0.0',
      port: process.env.PORT || 3000
    },
    masterKey: requireProcessEnv('MASTER_KEY'),
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    }
  },
  development: {
    mongo: {
      uri: 'mongodb://localhost/super-server-api-node',
      options: {
        debug: true
      }
    }
  },
  test: {
    mongo: {
      uri: 'mongodb://localhost/super-server-api-node',
      options: {
        debug: false
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8000,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/super-server-api-node'
    }
  }
}

export default _.merge(config.all, config[config.all.env])
