import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter Product Name"]
    },
    image:{
        public_id:{
            type:String,
        required:true
        },
        url:{
            type:String,
            required:true
        },
    },
    category:{
        type:String,
        required:[true,"Please Enter the category of the product"]
    },
    new_price:{
        type:String,
        required:true
    },
    old_price:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const Product=mongoose.model('Product',schema)