import {v2 as cloudinary} from 'cloudinary';

import fs from "fs"   
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
          
// cloudinary.config({ 
//   cloud_name: 'dj4zffbkd', 
//   api_key: '486588728682576', 
//   api_secret: 'TDBCdo3hW1QaASwjN4QmvdJ56ys' 
// });
const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath)return null;
        //upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        console.log("file is uploaded on cloudinary",response.url)
        // return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}