import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);   // it's given by node js
    }
}

export default connectDB
