const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const customer  = require('./model/customer/customer-router');
const item  = require('./model/item/item-router');
const cart  = require('./model/cart/cart-router');
const transaction  = require('./model/transaction/transaction-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to super-server-api API!' });
});

router.use('/user', user);
router.use('/customer', customer);
router.use('/item', item);
router.use('/cart', cart);
router.use('/transaction', transaction);


module.exports = router;
