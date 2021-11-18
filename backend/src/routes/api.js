var express = require('express');
var router = express.Router();
const User = require('../models/UserModel')
const AuthController = require('../controllers/api/authController')


/* Auth Route */
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);


module.exports = router;
