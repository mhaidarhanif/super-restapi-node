const Model = require('../../lib/model');
const userSchema  = require('./user-schema');


class UserModel extends Model {}

module.exports = new UserModel(userSchema);
