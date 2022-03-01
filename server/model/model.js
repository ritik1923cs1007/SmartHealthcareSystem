const mongoose=require('mongoose');
var schema=new mongoose.Schema({
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
    password:{
        type:String,
        // required:true
    },
    department:{
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
const UserDb=mongoose.model('userdb',schema);
module.exports=UserDb;