import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import cloudinary from "cloudinary";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import getDataUri from "../utils/dataUri.js";
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  
//   console.log(req.body);
//   console.log(req.file);
if(!name||!email||!password)return next(new ErrorHandler("Please Enter All fields", 400));
  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User already exists", 409));

      const avatarlocalFilePath= req.files?.avatar[0]?.path;
      console.log(avatarlocalFilePath);

      if(!avatarlocalFilePath) return next(new ErrorHandler("avatar is required"));
    const avatar= await uploadOnCloudinary(avatarlocalFilePath);
     console.log(avatar)
     if(!avatar)return next(new ErrorHandler("avatar is required"))
     const coverlocalFilePath=req.files?.coverImage[0]?.path;
     const coverImage= await uploadOnCloudinary(coverlocalFilePath);
//   const file = req.file;
//   const dataUri = getDataUri(file);
//   const mycloud = cloudinary.v2.uploader.upload(dataUri.content);
  user = await User.create({
    name,
    email,
    password,
    avatar:avatar.url,
    coverImage:coverImage.url||""
  });
  sendToken(res, user, "User Registered Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler("Please enter all fields", 400));
  const user = await User.findOne({ email }).select("+password");
  if (!user)
    return next(new ErrorHandler("email or password is incorrect", 401));
  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return next(new ErrorHandler("email or password is incorrect", 401));
  sendToken(res, user, `Welcome Back ${user.name}`, 200);
});
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expiresIn: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "logged out successfully",
    });
});
export const getMyprofile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    next(new ErrorHandler("Please Enter all fields", 400));
  const user = await User.findById(req.user._id).select("+password");
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) next(new ErrorHandler("Incorrect old password"));
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password Updated Successfully",
  });
});
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  const user = await User.findById(req.user._id);
  user.name = name;
  user.email = email;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

export const forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(new ErrorHandler("User with this email is not found", 401));
  const resetToken = await user.getResetToken();
  await user.save();
  const url = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;
  const message = `Click on the link to reset the password ${url},Ignore it if it was not you`;
  await sendEmail(user.email, "SHOPME reset password", message);
  res.status(200).json({
    success: true,
    message: `Reset Token send to ${user.email}`,
  });
});
