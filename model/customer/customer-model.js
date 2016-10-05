const Model = require('../../lib/model');
const customerSchema  = require('./customer-schema');


class CustomerModel extends Model {}

module.exports = new CustomerModel(customerSchema);
