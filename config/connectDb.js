const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const connectDb= async ()=>{
    try{
        const connect=await mongoose.connect(`mongodb+srv://genishprakash:${process.env.MONGO_PASSWORD}@testcluster.vw17fml.mongodb.net/?retryWrites=true&w=majority&appName=testCluster`)
        console.log("Database connected")
        console.log(connect.connection.host)
        console.log(connect.connection.name)

    }catch(err){
        console.log(err)
    }
}
module.exports=connectDb