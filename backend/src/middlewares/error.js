import { ErrorHandler } from "../utils/utilityClass.js"

export const errorMiddleware = (err, req, res, next) => {
    err.message ||= "Internal server error"
    err.statusCode ||= 500

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}