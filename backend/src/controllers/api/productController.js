class ProductController {
    static getProduct = (req, res, next) => {
        res.send('Product');
    } 

    static products = (req, res, next) => {
        res.send('Products');
    }   
    
    static delete = (req, res, next) => {
        res.send('Delete');
    }   

    static edit = (req, res, next) => {
        res.send('Edit');
    }   

    static update = (req, res, next) => {
        res.send('Update');
    }

    static review = (req, res, next) => {
        res.send('Review');
    }

    static deleteReview = (req, res, next) => {
        res.send('Review');
    }   
}

module.exports = ProductController