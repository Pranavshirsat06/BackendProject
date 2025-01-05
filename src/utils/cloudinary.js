import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });
    //file has been uplaoded successflly
    console.log("File uploaded successfully", response.url);
  } catch (error) {
    fs.unlinkSync(filepath); // remove the file from local directory as Uploading failed
    return null;
  }
};

export default uploadOnCloudinary;
