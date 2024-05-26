const express = require("express")

const router = express.Router()

const {
    registerController, 
    loginController, 
    currentController 
} = require("../controllers/userController")

const ValidateToken=require("../middleware/validateTokenHandler")

router.route('/register').post(registerController)

router.route('/login').post(loginController)

router.route('/current').get(ValidateToken ,currentController)

module.exports=router