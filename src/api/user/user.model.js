import Model from '../../lib/facade'
import userSchema from './user.schema'

class UserModel extends Model {}

module.exports = new UserModel(userSchema)
