import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import user from './routes/userRoutes.js'
import product from './routes/productRoutes.js'
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/error.js";
const app=express();
config({
    path:'./config/config.env'
})
//middlesware
app.use(json())
app.use(urlencoded({
    extended:true
}))
app.use(cookieParser());

//routes
app.use('/api/v1',product)
app.use('/api/v1',user);

//error handler
app.use(ErrorMiddleware)
export default app;