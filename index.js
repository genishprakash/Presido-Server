const express=require("express")
const dotenv=require("dotenv").config()
const app=express()
const cors=require("cors")
app.use(cors())
const connectDb=require("./config/connectDb")

const PORT=process.env.PORT || 4000
connectDb()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api/users",require("./routes/users"))
app.use("/api/property",require("./routes/property"))
app.listen(PORT,()=>{
    console.log(`Sever listening on port :${PORT}`)
})