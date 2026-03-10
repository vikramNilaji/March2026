// const mongoose =require("mongoose");
// const UserSchema=new mongoose.Schema({
//     username:{type:String,required:true,unique:true},
//     email:{type:String,required:true,unique:true},
//     password:{type:String,required:true,unique:true}
// })

// module.exports=mongoose.model('User',UserSchema)

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

export default mongoose.model("User", userSchema);