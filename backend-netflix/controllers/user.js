// import { User } from "../models/userModel.js";

// export const Register = async(req,res) =>{
//     try{
//         const { email } = req.body; 
//         const { password } = req.body; 

//         if(!email || !password){
//             return res.status(400).json({
//                 message:"Invalid Data",
//                 success:false
//             });
//         }

//         const user = await User.findOne({email});
//         if(user){
//             return res.status(400).json({
//                 message:"This email is already in use",
//                 success:false
//             });
//         }

//         await User.create({
//             email,
//             password
//         });

//         return res.status(201).json({
//             message:"Account created successfully."
//         });
//     }
//     catch(error){
//         console.error('Error:', error);
//         return res.status(500).json({
//             message: "Internal Server Error",
//             success: false
//         });
//     }
// };


// controllers/user.js

import User from '../models/userModel.js';

export const Register = async (req, res) => {
    try {
        const { email } = req.body; 
        const { password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required', 
            });
        }

        // Check if user with the same email exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email is already in use'
            });
        }

        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: newUser
        });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};
