/*
 * Super Config
 */

const config = {
  env: process.env.NODE_ENV || 'dev',
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  },
  mongo: {
    uri: process.env.MONGO_DB_URI || 'mongodb://localhost/super-server-api'
  }
}

module.exports = config
