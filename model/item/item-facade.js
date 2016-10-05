const Model = require('../../lib/facade');
const itemSchema  = require('./item-schema');


class ItemModel extends Model {}

module.exports = new ItemModel(itemSchema);
