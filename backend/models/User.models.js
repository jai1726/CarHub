const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    email:{
    type:String,
     required:true,
     unique:true
    },
    name:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    cars:[{
        type:mongoose.Types.ObjectId,
        ref:"Car",
        required:true
    }]
   
}) 
const User=mongoose.model("User",userSchema);
module.exports = User;