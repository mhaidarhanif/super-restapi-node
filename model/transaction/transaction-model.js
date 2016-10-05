const Model = require('../../lib/model');
const transactionSchema  = require('./transaction-schema');


class TransactionModel extends Model {}

module.exports = new TransactionModel(transactionSchema);
