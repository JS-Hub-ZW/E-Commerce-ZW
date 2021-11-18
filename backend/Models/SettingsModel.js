var mongoose = require('mongoose');

var SettingsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
},{
    timestamps: true
});