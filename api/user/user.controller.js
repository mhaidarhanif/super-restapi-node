import Controller from '../../lib/controller'
import userModel from './user.model'

class UserController extends Controller {}

module.exports = new UserController(userModel)
