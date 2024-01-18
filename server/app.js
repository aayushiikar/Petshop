const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');
const Login =require('./models/login');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.get("/hello",(req,res)=>{
    res.send("hello world")
})

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://jenny:Jenny@cluster0.5pr1cod.mongodb.net/PetshopDB',()=>{
    console.log("connected")
})
app.post('/api/login',async(req,res)=>{
    Login.findOne({username:req.body.username,password:req.body.password},(error,data)=>{
        if(error){
            console.log(error)
        }else{
            const token=jwt.sign({
                id:data._id,
                name:data.name,
                username:data.username,  
            },'secret123')
            res.json({status:'ok',user:token})
        }
    })
})
app.post('/api/register',async(req,res)=>{
    console.log(req.body)
    const a= await Login.create(req.body);
    res.json(a)
})
app.get("/api/Student/:id",async(req,res)=>{
    Login.findById({_id:req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }else{
                    res.json(data)
                    console.log(data)
            }
})})
app.listen(9000,()=>{
    console.log("connected to 9000 port")
})
