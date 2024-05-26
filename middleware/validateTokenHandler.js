const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')

const validateToken=asyncHandler(async(req,res,next)=>{
    let authHeader=req.headers.authorization || req.headers.Authorization
    const secretkey=process.env.SECRET_KEY || "secretkey"
    let token=authHeader.split(' ')[1]
    if (!token) {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
    if(authHeader && authHeader.startsWith("Bearer")){
        jwt.verify(token,secretkey,(err,payload)=>{
            if(err){
                res.status(401)
                throw new Error('User not authorized')
            }
            else{
                req.user=payload.user
                next()
            }
        })
        

    }
})
module.exports=validateToken