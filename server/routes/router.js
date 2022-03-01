const express=require('express');
const route=express.Router();
const axios=require('axios');
const controller=require('../controller/controller')
const patientcontroller=require('../controller/patientcontroller');
const appointmentcontroller=require('../controller/appointmentcontroller');

route.get('/',(req,res)=>{
    res.render('index');
})
//Admin section
route.get('/admin_base',(req,res)=>{
    res.render('admin_base');
})

route.get('/admin-doctor',(req,res)=>{
    res.render('admin-doctor');
})

route.get('/admin-view-doctor',(req,res)=>{
    axios.get('http://localhost:3000/api/users').then(function(response){
        res.render('admin-view-doctor',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
    
})

route.get('/admin-add-doctor',(req,res)=>{
    res.render('admin-add-doctor');
})

route.get('/admin-view-doctor-specialisation',(req,res)=>{
    axios.get('http://localhost:3000/api/users').then(function(response){
        res.render('admin-view-doctor-specialisation',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
})
route.get('/admin-update-doctor',(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}}).then(function(userdata){
        res.render('admin-update-doctor',{user:userdata.data});
    }).catch(err=>{
        res.send(err)
    })
  
})


route.get('/admin-patient',(req,res)=>{
    res.render('admin-patient');
})

route.get('/admin-add-patient',(req,res)=>{
    res.render('admin-add-patient');
})

route.get('/admin-update-patient',(req,res)=>{
    axios.get('http://localhost:3000/api/healthcare',{params:{id:req.query.id}}).then(function(userdata){
        res.render('admin-update-patient',{user:userdata.data});
    }).catch(err=>{
        res.send(err)
    })
})
route.get('/admin-view-patient',(req,res)=>{
    axios.get('http://localhost:3000/api/healthcare').then(function(response){
        res.render('admin-view-patient',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
})

route.get('/admin-discharge-patient',(req,res)=>{
    res.render('admin-discharge-patient');
})

route.get('/admin-appointment',(req,res)=>{
    res.render('admin-appointment');
})
route.get('/admin-view-appointment',(req,res)=>{
    axios.get('http://localhost:3000/api/appointment').then(function(response){
        res.render('admin-view-appointment',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
})

route.get('/admin-add-appointment',(req,res)=>{
    res.render('admin-add-appointment');
})
//doctor section
route.get('/doctor-base',(req,res)=>{
    res.render('doctor-base');
})

route.get('/doctor-delete-appointment',(req,res)=>{
    axios.get('http://localhost:3000/api/appointment').then(function(response){
        res.render('doctor-delete-appointment',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
})

route.get('/doctor-view-appointment',(req,res)=>{
    axios.get('http://localhost:3000/api/appointment').then(function(response){
        res.render('doctor-view-appointment',{users:response.data});
    }).catch(err=>{
        res.send(err);
    })
})
route.get('/doctor-appointment',(req,res)=>{
    res.render('doctor-appointment');
})
//patient section
route.get('/patient-book-appointment',(req,res)=>{
    res.render('patient-book-appointment');
})
//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)
//Patient API
route.post('/api/healthcare',patientcontroller.patientcreate);
route.get('/api/healthcare',patientcontroller.patientfind)
route.put('/api/healthcare/:id',patientcontroller.patientupdate)
route.delete('/api/healthcare/:id',patientcontroller.patientdelete)
//Appointment Api
route.post('/api/appointment',appointmentcontroller.appointmentcreate);
route.get('/api/appointment',appointmentcontroller.appointmentfind)
route.put('/api/appointment/:id',appointmentcontroller.appointmentupdate)
route.delete('/api/appointment/:id',appointmentcontroller.appointmentdelete)
module.exports=route