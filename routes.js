const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/user-router');
const customer = require('./model/customer/customer-router');
const item = require('./model/item/item-router');
const cart = require('./model/cart/cart-router');
const transaction = require('./model/transaction/transaction-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to super-server-api API!' });
});

router.use('/api/users', user);
router.use('/api/customers', customer);
router.use('/api/items', item);
router.use('/api/carts', cart);
router.use('/api/transactions', transaction);


module.exports = router;
