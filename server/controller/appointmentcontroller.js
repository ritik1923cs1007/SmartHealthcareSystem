const AppointmentDb = require('../model/appointmentmodel');
var UserDb=require('../model/appointmentmodel');
//create and save new doctor
exports.appointmentcreate=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'content can not be empty'});
        return;
    }
    //new user
    const user=new AppointmentDb({
        firstname:req.body.firstname,
        address:req.body.address,
        username:req.body.username,
        age:req.body.age,
        contactnumber:req.body.contactnumber,
        date:req.body.date,
        symptoms:req.body.symptoms,
        id:req.body.id,
        description:req.body.description
    
    })
    //save user in the database
    user.save(user).then(data=>{
        // res.send(data)
        res.redirect('/admin-add-appointment')
    }).catch(err=>{
        res.status(500).send({message:err.message||"Some error occurred"})
    })
}
//retrieve and return 
exports.appointmentfind=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        AppointmentDb.findById(id).then(data=>{
            if(!data){
                res.status(404).send({message:"User not found"})
            }
            else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:" Error retrieving user with id"})
        })
    }
    else{
    AppointmentDb.find().then(user=>{
        res.send(user)
        
    }).catch(err=>{
        res.status(500).send({message:err.message||"Error occured"})
    })
}
}
//Update a new identified doctor by id
exports.appointmentupdate=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Data to update cannot be empty"})
    }
    const id=req.params.id;
    AppointmentDb.findByIdAndUpdate(id,req.body,{useFindandModify:false}).then(data=>{
        if(!data){
            return res.status(404).send({message:`Cannot update user with id ${id} User not found`})
        }
        else{
            res.send(data)
            
        }
    }).catch(err=>{
        res.status(500).send({message:"Error update user information"})
    })
}
exports.appointmentdelete=(req,res)=>{
    const id=req.params.id;
    AppointmentDb.findByIdAndDelete(id).then(data=>{
        if(!data){
            return res.status(404).send({message:`Cannot delete user with id ${id} User not found`})
        }else{
            res.send({message:"User was deleted succesfully"})
        }
    }).catch(res.status(500).send({
        message:"cannot delete user"
    }))
}