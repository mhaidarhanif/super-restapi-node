const Controller = require('../../lib/controller');
const userModel  = require('./user-facade');


class UserController extends Controller {}

module.exports = new UserController(userModel);
