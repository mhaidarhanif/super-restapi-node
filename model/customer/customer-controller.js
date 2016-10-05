const Controller = require('../../lib/controller')
const customerModel  = require('./customer-model')


class CustomerController extends Controller {}

module.exports = new CustomerController(customerModel)
