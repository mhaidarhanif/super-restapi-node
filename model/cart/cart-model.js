const Model = require('../../lib/model');
const cartSchema  = require('./cart-schema');


class CartModel extends Model {}

module.exports = new CartModel(cartSchema);
