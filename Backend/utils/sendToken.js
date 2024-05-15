export const sendToken=(res,user,message,statusCode=200)=>{
    const token=user.getJWTToken();
    const options={
        httpOnly:true,
        sameSite:'none'
    }
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        message,
        user,
    })
}