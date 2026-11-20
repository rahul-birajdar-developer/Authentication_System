import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const connectDB = async () => {
    // console.log(process.env.MONGO_URI)
    try {
        const res = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        // console.log("Database connected successfully !! ");
    } catch (error) {
        console.log(`DataBase Connection Error : ${error}`);
        process.exit(1);
    }
}

export default connectDB;