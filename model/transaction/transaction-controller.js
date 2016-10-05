const Controller = require('../../lib/controller')
const transactionModel  = require('./transaction-model')


class TransactionController extends Controller {}

module.exports = new TransactionController(transactionModel)
