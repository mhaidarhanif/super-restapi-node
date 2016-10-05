const Controller = require('../../lib/controller');
const cartModel  = require('./cart-facade');


class CartController extends Controller {}

module.exports = new CartController(cartModel);
