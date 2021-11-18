class SEOController {
    static getSEO = (req, res, next) => {
        res.send('Get SEO');
    } 

    static seo = (req, res, next) => {
        res.send('Get SEO');
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
}

module.exports = SEOController