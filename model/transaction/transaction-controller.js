const Controller = require('../../lib/controller');
const transactionModel  = require('./transaction-facade');


class TransactionController extends Controller {}

module.exports = new TransactionController(transactionModel);
