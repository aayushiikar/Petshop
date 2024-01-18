const mongoose=require('mongoose')

const Userdata=new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
},{
    collection: 'user-data'
})

const model=mongoose.model('users-data',Userdata)

module.exports=model
