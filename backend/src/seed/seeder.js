var mongoose=require("mongoose")
var User=require("../Models/UserModel")
var Product=require("../Models/ProductModel")
const connectDB = require('../config/db');
const products=require("./data/Products")

require('dotenv').config()

connectDB()
const insertData=async()=>{
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await User({
            name: "Mr Admin",
            role_id: "Admin",
            email: "admin@admin.com",
            password:"abc123"
        }).save()
        const user=await User.findOne({email:"admin@admin.com"})
        var sampleProducts = products.reduce((sproducts, product) => {
            if (product.price) {
              sproducts.push(
                {
                    name:product.title,
                    brand:product.manufacturer,
                    user:user._id,
                    price:product.price,
                    platform:product.platform? Array.isArray(product.platform)?product.platform.join(","):product.platform:"",
                    image:product.images.large.url,
                    description:product.description[0],
                    category:product.productgroup,
                    features:product.feature,
                    
                }
              );
            }
            return sproducts;
          }, []);
        
        Product.insertMany(sampleProducts).then(()=>{
            console.log("Data has been entered successfully")
            process.exit()
        })
    } catch (error) {
        console.log(`${error}`)
    }
}
const destroyData=async()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        console.log("Destroyed Data");
        process.exit()
    } catch (error) {
        console.log(`${error}`);
    }
}

if(process.argv[2]==="-d"){
    destroyData()
}
else{
    insertData();
} 