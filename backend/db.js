import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = "mongodb://127.0.0.1:27017/class";
export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;