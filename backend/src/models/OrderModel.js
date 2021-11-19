var mongoose = require("mongoose")

var OrderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


var OrderItemsSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }, 
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
}, {
    timestamps: true
})

const OrderModel = mongoose.model("Order", OrderSchema)
module.exports = OrderModel
