const express=require('express');
const dotenv=require('dotenv');

const bodyparser=require('body-parser');
const path=require('path');
const connectDB=require('./server/database/connection');
const app=express();
dotenv.config({path:'config.env'})
const morgan=require('morgan');
app.use(morgan('tiny'));
connectDB();
const PORT=process.env.PORT||8080

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})