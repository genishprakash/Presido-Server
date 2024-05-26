const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')

const validateToken=asyncHandler(async(req,res,next)=>{
    let authHeader=req.headers.authorization || req.headers.Authorization

    if(authHeader && authHeader.startsWith("Bearer")){
        let token=authHeader.split(' ')[1]
        jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
            if(err){
                res.status(401)
                throw new Error('User not authorized')
            }
            else{
                req.user=payload.user
                next()
            }
        })
        if (!token) {
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }

    }
})
module.exports=validateToken