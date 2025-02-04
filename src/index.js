
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
const app = express();

dotenv.config({
    path: '/.env'
})


connectDB();
// (async () => {
//     try {
//         const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log('DB is connected to', db.connection.host);
//         app.on('error', (error) => {
//             console.log('Error', error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })()
