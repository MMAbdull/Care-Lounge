import mongoose from "mongoose";
import { config } from "../../config/env.js";

export const connectDB = async () => {
  try{
    if(!config.databaseurl){
      throw new Error("DATABASE_URL is missing in the environment variables");
    }
    const conn = await mongoose.connect(config.databaseurl);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch(error){
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};