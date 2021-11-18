class AuthController {
    static login = (req, res, next) => {
        res.send('Login');
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


}

module.exports=AuthController