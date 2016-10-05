const Controller = require('../../lib/controller');
const itemModel  = require('./item-facade');


class ItemController extends Controller {}

module.exports = new ItemController(itemModel);
