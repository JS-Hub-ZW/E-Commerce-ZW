var mongoose = require('mongoose');

var SEOSchema = mongoose.Schema({
    page_name: {
        type: String,
        required: true,
        unique: true,
        default: 'default'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const SEOModel = mongoose.model('SEO', SEOSchema);
module.exports = SEOModel;
