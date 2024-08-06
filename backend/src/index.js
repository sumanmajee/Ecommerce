import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/database.js"
import dotenv from "dotenv"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGODB connection failed!!!", err);
    
})