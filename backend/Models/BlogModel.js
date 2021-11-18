var mongoose   = require('mongoose');


var BlogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory'
    },
    seo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SEO'
    }
}, {
    timestamps: true
});

const BlogModel = mongoose.model('Blog', BlogSchema);
module.exports = BlogModel;
