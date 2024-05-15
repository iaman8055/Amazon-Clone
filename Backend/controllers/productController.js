import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Product } from "../models/Product.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const getAllProduct=catchAsyncError(async(req,res,next)=>{
    const product=await Product.find();

    res.status(200).json({
        success:true,
        product
    })
})

export const createProduct=catchAsyncError(async(req,res,next)=>{
    const{name,category,old_price,new_price}=req.body;
    if(!name||!category||!old_price||!new_price) return next(new ErrorHandler("Please enter all fields",400))
    const product=await Product.create({
        name,
        category,
        old_price,
        new_price,
        image:{
            public_id:temp,
            url:temp
        }
    })
    res.status(200).json({
        success:true,
        message:"Product created successfully",
    })
})

export const removeProduct=catchAsyncError(async(req,res,next)=>{
    const{_id}=req.body;
    if(!_id)return next(new ErrorHandler('Please enter the id',400))
    const product=await Product.findByIdAndDelete({_id:req.body._id});
    if(!product)return next(new ErrorHandler('Product with this id is not found',404))
    res.status(200).json({
        success:true,
        message:"Product removed successfully"
    })
})
