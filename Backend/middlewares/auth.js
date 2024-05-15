import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import jwt from 'jsonwebtoken'
export const isAuthenticated=catchAsyncError(async(req,res,next)=>{
    const{token}=req.cookies;

    if(!token) return next(new ErrorHandler("Please logged in",401))
    const decoded=jwt.verify(token,process.env.SECRET_TOKEN)
    req.user=await User.findById(decoded._id);
    next();
})