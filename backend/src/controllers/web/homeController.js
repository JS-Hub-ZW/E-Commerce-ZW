class HomeController {
    static home = (req, res, next) => {
        res.send('Home');
    }

    static cart = (req, res, next) => {
        res.send('Cart');
    }

    static subscribe = (req, res, next) => {
        res.send('Subscribe');
    }

    static contact = (req, res, next) => {
        res.send('Contact');
    }   
}

module.exports = HomeController