class BlogController {
    static getBlog = (req, res, next) => {
        res.send('Get Blog');
    } 

    static blogs = (req, res, next) => {
        res.send('Get Blogs');
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

module.exports = BlogController