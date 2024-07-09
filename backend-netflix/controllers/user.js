import { User } from "../models/userModel.js";

export const Register = async(req,res) =>{
    try{
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid Data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already in use",
                success:false
            })
        }

        await User.create({
            email,
            password
        });
        return res.status(201).json({
            message:"Account created successfully."
        })
    }
    catch(error){
        console.log(error);
    }
}