const Model = require('../../lib/facade')
const transactionSchema  = require('./transaction-schema')


class TransactionModel extends Model {}

module.exports = new TransactionModel(transactionSchema)
