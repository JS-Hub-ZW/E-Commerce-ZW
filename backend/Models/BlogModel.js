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
        type: monogoose.Schema.Types.ObjectId,
        ref: 'BlogCategory'
    }
}, {
    timestamps: true
});

const BlogModel = mongoose.model('Blog', BlogSchema);
module.exports = BlogModel;
