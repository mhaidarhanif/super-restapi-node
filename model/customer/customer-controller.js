const Controller = require('../../lib/controller');
const customerModel  = require('./customer-facade');


class CustomerController extends Controller {}

module.exports = new CustomerController(customerModel);
