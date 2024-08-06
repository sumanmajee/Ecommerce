import express from "express"
import { errorMiddleware } from "./middlewares/error.js"

const app = express()
app.use(express.json())

// routes import

import userRouter from "./routes/user.routes.js"


// routes declaration

app.use("/api/v1/users", userRouter)

app.use(errorMiddleware)

export { app }