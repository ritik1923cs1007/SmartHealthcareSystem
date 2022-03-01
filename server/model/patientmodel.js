const mongoose=require('mongoose');
var patientschema=new mongoose.Schema({
    firstname:{
        type:String,
        // required:true
    },
    lastname:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    username:{
        type:String,
        // required:true
    },
    date:{
        type:String,
        // required:true
    },
    
    symptoms:{
        type:String,
        // required:true
    },
 
    age:{
        type:Number,
        // required:true
    },
    contactnumber:{
        type:Number,
        // required:true
    },
    id:{
        type:String,
    }
    
    
})
//create new collection
const PatientDb=mongoose.model('patientdb',patientschema);
module.exports=PatientDb;