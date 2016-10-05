const Model = require('../../lib/facade');
const customerSchema  = require('./customer-schema');


class CustomerModel extends Model {}

module.exports = new CustomerModel(customerSchema);
