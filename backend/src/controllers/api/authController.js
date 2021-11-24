const User = require('../../models/UserModel')
const PasswordReset = require('../../models/PasswordResetModel')
var bcrypt = require("bcrypt")
var cryptojs = require('crypto-js')

class AuthController {
    static login = (req, res, next) => {

        const { username, password } = req.body;

        User.findOne({ username: username }, (error, user) => {
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                    if (same) { // if passwords match
                        // store user session, will talk about it later
                        req.session.userId = user._id;
                        res.json({
                            status: 'success',
                            message: 'Login Successful',
                        })
                    }
                    else {
                        res.json({
                            status: 'failed',
                            message: 'Password mismatch',
                        })
                    }
                })
            }
            else {
                res.json({
                    status: 'failed',
                    message: 'User does not exist',
                })
            }
        })

    }

    static register = (req, res, next) => {
        const { username, password, name, email } = req.body;

        let newUser = {
            username: username,
            password: password,
            name: name,
            email: email,
            role_id: 'user'
        }


        User.create(newUser, (error, user) => {
            if (error) {
                console.log(error)
                return res.json({
                    status: 'failed',
                    message: 'Registration Failed',
                })
            }
            res.json({
                status: 'success',
                message: 'Registration Successful',
            })
        })
    }

    static resetPassword = (req, res, next) => {
        res.send('Reset');
    }

    static forgotPassword = (req, res, next) => {
        const { email } = req.body;

        User.findOne({ email: email }, (error, user) => {
            if (user) {
                let token = cryptojs.SHA1(email + new Date().getTime()).toString();

            

                PasswordReset.create({
                    user: user._id,
                    token: token
                }, (error, reset) => {
                    if (error) {
                        console.log(error)
                        return res.json({
                            status: 'failed',
                            message: 'Password reset failed',
                        })
                    }

                    // TODO Send email to user

                    res.json({
                        status: 'success',
                        message: 'Password reset link sent to your email',
                    })
                })
            }
            else {
                res.json({
                    status: 'failed',
                    message: 'Email does not exist',
                })
            }
        })
    }

    static logout = (req, res, next) => {
        req.session.destroy(() => {
            res.json({
                status: 'success',
                message: 'Logout Successful',
            })
        })
    }


}

module.exports = AuthController