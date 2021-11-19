var mongoose = require('mongoose');


var TransactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    gateway: {
        type: String,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});


const TransactionModel = mongoose.model('Transaction', TransactionSchema);
module.exports = TransactionModel;
