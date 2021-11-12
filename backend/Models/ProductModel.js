var mongoose=require("mongoose")
var ReviewSchema=mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    comment:String,
    rating:{
        type:Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
}
)
var ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    price:{
        type:Number,
        required:true
    },
    platform:String,
    
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    reviews:[ReviewSchema],
    
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    features:[{type:String}],
},{timestamps:true})
const ProductModel=mongoose.model("Product",ProductSchema)
module.exports=ProductModel