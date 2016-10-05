const Model = require('../../lib/facade')
const cartSchema = require('./cart-schema')


class CartModel extends Model {}

module.exports = new CartModel(cartSchema)
