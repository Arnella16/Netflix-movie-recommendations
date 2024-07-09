// controllers/user.js

import User from '../models/userModel.js';
import bycryptjs from "bcryptjs";

export const Register = async (req, res) => {
    // console.log('mukesh is dumb');
    try {
        const { email } = req.body; 
        const { password } = req.body;
        console.log('Email:', email, 'Password:', password);

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

        const hashedPassword = await bycryptjs.hash(password,16);

        // Create a new user
        const newUser = new User({ email, password:hashedPassword });
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
