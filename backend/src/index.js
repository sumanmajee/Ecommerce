import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/database.js"
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})

connectDB()