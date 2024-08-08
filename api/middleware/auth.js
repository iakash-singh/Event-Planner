import { jwtSecret } from "../config/config.js";
import jwt from "jsonwebtoken";

const auth = (req,res,next)=>{
    const token = req.header("x-auth-token")
    if(!token) return res.status(401).json({
        message: "no token, auth denied"
    })
    try{
        const decoded = jwt.verify(token,jwtSecret)
        req.user= decoded.user
        next()

    }catch(err){
        console.log(err)
        return res.status(401).json({
            message: "token is not valid"
        })
    }

}

export default auth;