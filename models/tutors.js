const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:5,
        maxLength: 25

    },

    email:{
        unique:true,
        type:String,
        minLength:5,
        maxLength: 255,
        required:true
    }

})