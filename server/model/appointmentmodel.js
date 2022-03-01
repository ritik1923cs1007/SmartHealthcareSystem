const mongoose=require('mongoose');
var appointment=new mongoose.Schema({
    firstname:{
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
    // contactnumber:{
    //     type:String
    // },
    // date:{
    // type:String
    // },
    symptoms:{
        type:String,
        // required:true
    },
 
    age:{
        type:Number,
        // required:true
    },
    
    id:{
        type:String,
    }
    ,
 
    description:{
        type:String,
        // required:true
    },
    
    
})
//create new collection
const AppointmentDb=mongoose.model('appointmentdb',appointment);
module.exports=AppointmentDb;