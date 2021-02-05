const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    contact:{
        type:Number
    },
    blood_group:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },
    gender:{
        type:String,
        enum:['M','F']
    }
})

module.exports = mongoose.model('Donor', donorSchema)