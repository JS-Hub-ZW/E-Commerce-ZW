var express = require('express');
var router = express.Router();
const HomeController = require('../controllers/web/homeController')
const ProductController = require('../controllers/web/productController')
const AuthController = require('../controllers/web/authController')
const SettingsController = require('../controllers/web/settingsController')
const BlogController = require('../controllers/web/blogController')
const SEOController = require('../controllers/web/seoController')

/* Home Routes */
router.get('/', HomeController.home);

/* Product Routes */
router.get('/product/:id', ProductController.getProduct);
router.get('/products', ProductController.products);
router.get('/edit-product/:id', ProductController.edit);
router.post('/update-product/:id', ProductController.update);
router.post('/delete-product/:id', ProductController.delete);

/* Auth Routes */
router.get('/auth/login', AuthController.loginPage);
router.post('/auth/login', AuthController.login);
router.get('/auth/register', AuthController.registerPage);
router.post('/auth/register', AuthController.register);
router.get('/auth/forgot-password', AuthController.forgotPasswordPage);
router.post('/auth/forgot-password', AuthController.forgotPassword);
router.get('/auth/reset-password', AuthController.resetPasswordPage);
router.post('/auth/reset-password', AuthController.resetPassword);

/* Settings Routes */
router.get('/setting/:id', SettingsController.getSetting);
router.get('/settings', SettingsController.settings);
router.get('/edit-setting/:key', SettingsController.edit);
router.post('/update-setting/:key', SettingsController.update);
router.post('/delete-setting/:key', SettingsController.delete);

/* Blog Routes */
router.get('/blog/:id', BlogController.getBlog);
router.get('/blogs', BlogController.blogs);
router.get('/edit-blog/:id', BlogController.edit);
router.post('/update-blog/:id', BlogController.update);
router.post('/delete-blog/:id', BlogController.delete);

/* SEO Routes */
router.get('/seo/:page_num', SEOController.getSEO);
router.get('/all-seo', SEOController.seo);
router.get('/edit-seo/:page_num', SEOController.edit);
router.post('/update-seo/:page_num', SEOController.update);
router.post('/delete-seo/:page_num', SEOController.delete);



module.exports = router;
