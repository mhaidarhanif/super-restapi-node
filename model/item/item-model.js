const Model = require('../../lib/model');
const itemSchema  = require('./item-schema');


class ItemModel extends Model {}

module.exports = new ItemModel(itemSchema);
