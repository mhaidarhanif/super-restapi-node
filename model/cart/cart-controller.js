const Controller = require('../../lib/controller')
const cartModel  = require('./cart-model')


class CartController extends Controller {}

module.exports = new CartController(cartModel)
