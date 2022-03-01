var UserDb=require('../model/model');
//create and save new doctor
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:'content can not be empty'});
        return;
    }
    //new user
    const user=new UserDb({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address,
        username:req.body.username,
        password:req.body.password,
        department:req.body.department,
        age:req.body.age,
        contactnumber:req.body.contactnumber,
        id:req.body.id
    
    })
    //save user in the database
    user.save(user).then(data=>{
        // res.send(data)
        res.redirect('/admin-add-doctor')
    }).catch(err=>{
        res.status(500).send({message:err.message||"Some error occurred"})
    })
}
//retrieve and return 
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        UserDb.findById(id).then(data=>{
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
    UserDb.find().then(user=>{
        res.send(user)
        
    }).catch(err=>{
        res.status(500).send({message:err.message||"Error occured"})
    })
}
}
//Update a new identified doctor by id
exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Data to update cannot be empty"})
    }
    const id=req.params.id;
    UserDb.findByIdAndUpdate(id,req.body,{useFindandModify:false}).then(data=>{
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
exports.delete=(req,res)=>{
    const id=req.params.id;
    UserDb.findByIdAndDelete(id).then(data=>{
        if(!data){
            return res.status(404).send({message:`Cannot delete user with id ${id} User not found`})
        }else{
            res.send({message:"User was deleted succesfully"})
        }
    }).catch(res.status(500).send({
        message:"cannot delete user"
    }))
}