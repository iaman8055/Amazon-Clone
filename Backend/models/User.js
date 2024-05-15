import mongoose, { Schema } from "mongoose";
import { validate } from "node-cron";
import validator from "validator";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import crypto from 'crypto'
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        unique:true,
        minLength:[6,"Password must be atleast 6 character"],
        select:false
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
   
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:String,


})

schema.pre('save',async function(){
    if(!this.isModified("password"))return next();
    this.password=await bcrypt.hash(this.password,10)
})
schema.methods.getJWTToken=function(){
    return jwt.sign({_id:this._id},process.env.SECRET_TOKEN,{
        expiresIn:"15d"
    })
}
schema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
};
schema.methods.getResetToken=async function(){
    const resetToken=crypto.randomBytes(20).toString("hex")
    this.resetPasswordToken=crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpire=Date.now()+15*60*1000;
    return resetToken;
}


export const User=mongoose.model('User',schema);