// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'twitterAuth': {
    'consumerKey': '0000000000000000',
    'consumerSecret': '000000000000000000',
    'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },

  'facebookAuth': {
    'clientID': '0000000000000000',
    'clientSecret': '000000000000000000',
    'callbackURL': 'http://localhost:8080/auth/facebook/callback'
  },

  'googleAuth': {
    'clientID': '000000000000000000.apps.googleusercontent.com',
    'clientSecret': '000000000000000000',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  }
}
