import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`
    ); //get the connection instance on console.log
  } catch (error) {
    console.log("mongoDb connection error:", error);
    process.exit(1); //learn about more exit code
  }
};

export default connectDB;
