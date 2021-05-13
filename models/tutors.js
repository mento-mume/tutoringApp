const mongoose = require ('mongoose')

const tutorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
})
const Tutor = mongoose.model('Tutor',tutorSchema)
exports.Tutor = Tutor;