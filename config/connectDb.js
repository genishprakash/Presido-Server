const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const connectDb= async ()=>{
    try{
        const connect=await mongoose.connect(process.env.Connection_String)
        console.log("Database connected")
        console.log(connect.connection.host)
        console.log(connect.connection.name)

    }catch(err){
        console.log(err)
    }
}
module.exports=connectDb