class BlogController {
    static getBlog = (req, res, next) => {
        res.send('Get Blog');
    } 

    static blogs = (req, res, next) => {
        res.send('Get Blogs');
    }   

    static makeComment = (req, res, next) => {
        res.send('Make a comment');
    }   

    static comments = (req, res, next) => {
        res.send('Get all comments');
    }   
}

module.exports = BlogController