var mongoose = require('mongoose');

var BlogCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory'
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
});

const BlogCategoryModel = mongoose.model('BlogCategory', BlogCategorySchema);
module.exports = BlogCategoryModel;