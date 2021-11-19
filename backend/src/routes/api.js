var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/api/authController')
const ProductController = require('../controllers/api/productController')
const OrderController = require('../controllers/api/orderController')
const BlogController = require('../controllers/api/blogController')


/* Auth Route */
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);

/* Product Routes */
router.get('/product/:id', ProductController.getProduct);
router.get('/products', ProductController.products);
router.get('/edit-product/:id', ProductController.edit);
router.post('/update-product/:id', ProductController.update);
router.post('/delete-product/:id', ProductController.delete);
router.post('/product-review/:id', ProductController.review);
router.post('/delete-product-review/:id', ProductController.deleteReview);

/* Order Routes */
router.post('/checkout', OrderController.checkout);
router.post('/re-checkout/:id', OrderController.reCheckout);
router.get('/orders', OrderController.orders);
router.get('/order/:id', OrderController.order);
router.post('/delete-order/:id', OrderController.delete);


/* Blog Routes */
router.get('/blog/:id', BlogController.getBlog);
router.get('/blogs', BlogController.blogs);
router.post('/blog-comment', BlogController.makeComment);
router.get('/blog-comments', BlogController.comments);



module.exports = router;
