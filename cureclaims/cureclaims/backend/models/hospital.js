const mongoose=require("mongoose");
const HospitalSchema= new mongoose.Schema({
    name:String,
    address:String,
    email:String,
    phonenumber:Number,
    registrationNum:Number

})
module.export=mongoose.model('hospital', HospitalSchema);