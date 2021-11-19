class AuthController {
    static login = (req, res, next) => {
        res.send('Login');
    }

    static loginPage = (req, res, next) => {
        res.send("Login Page")
    }

    static registerPage = (req, res, next) => {
        res.send("Register Page")
    }

    static register = (req, res, next) => {
        res.send('Register');
    }

    static resetPasswordPage = (req, res, next) => {
        res.send('Reset Pasword Page');
    }

    static resetPassword = (req, res, next) => {
        res.send('Reset Password');
    }

    static forgotPasswordPage = (req, res, next) => {
        res.send('Forget Password Page');
    }

    static forgotPassword = (req, res, next) => {
        res.send('Forget');
    }


}

module.exports=AuthController