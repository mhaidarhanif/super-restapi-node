const Controller = require('../../lib/controller');
const userModel  = require('./user-model');


class UserController extends Controller {}

module.exports = new UserController(userModel);
