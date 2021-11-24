const mongoose = require('mongoose');


const PasswordResetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    token: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const PasswordResetModel = mongoose.model('PasswordReset', PasswordResetSchema);
module.exports = PasswordResetModel;