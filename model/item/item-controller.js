const Controller = require('../../lib/controller');
const itemModel  = require('./item-model');


class ItemController extends Controller {}

module.exports = new ItemController(itemModel);
