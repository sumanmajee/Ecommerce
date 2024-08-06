import { User } from "../models/user.model.js";
import { ErrorHandler } from "../utils/utilityClass.js";

export const newUser = async (req, res, next) => {
  try {
    
    const { name, email, photo, gender, _id, dob } = req.body;

    const user = await User.create({
        name,
        email,
        photo,
        gender,
        _id,
        dob,
    });

    return res.status(201).json({
        success: true,
        message: `Welcome, ${user.name}`
    })

  } catch (error) {
    console.log(error);
    
    
  }
};
