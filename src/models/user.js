const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
     },
     last_name:{
       type:String,
       required:true
     },
     contact:{
         type:Number,
         required:true
     },
     password:{
        type:String,
        // required:true
     },
     role:{
         type:String,
         enum:["ADMIN", "USER"],
         default:"USER"
     },
     address:{
         type:String
     },
     gender:{
        type:String,
        enum:["M", "F"] 
     },
     is_active:{
         type:Boolean,
         default:true
     },
     is_deleted:{
         type:Boolean,
         default:false
     },
     created_at:{
         type:Number,
         default:Date.now()
     }
 })
 
 module.exports = mongoose.model('User', userSchema)