var mongoose=require("mongoose")
var bcrypt=require("bcrypt")
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    role_id:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
},
{
  timestamps: true
})
UserSchema.pre('save',async function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    var salt= await bcrypt.genSalt(10)
    // Salt for hashing
    user.password=await bcrypt.hash(user.password,salt)
    // Storing hashed password
}); 
UserSchema.methods.matchPassword =async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}; 
const UserModel=mongoose.model('User',UserSchema)
module.exports=UserModel