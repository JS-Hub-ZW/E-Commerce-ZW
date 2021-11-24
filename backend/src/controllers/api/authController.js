const User = require('../../models/UserModel')

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
        res.send('Register');
    }

    static resetPassword = (req, res, next) => {
        res.send('Reset');
    }

    static forgotPassword = (req, res, next) => {
        res.send('Forget');
    }

    static logout = (req, res, next) => {
        req.session.destroy(() =>{
            res.json({
                status: 'success',
                message: 'Logout Successful',
            }) })
    }


}

module.exports = AuthController