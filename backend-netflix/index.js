// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user-route.js"

databaseConnection();

dotenv.config({
    path: ".env"
})

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res)=>{
    res.status(200).json({
        message:"Hello"
    })
})

app.post('/api/v1/user/register', (req, res) => {
    // Handle registration logic here
    res.send('User registered successfully');
});

app.use("/api/v1/user" , userRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Server at port ${process.env.PORT}`);
})


// Example using Express.js
const router = express.Router();

// Define your route
router.get('/api/v1/user/', (req, res) => {
    // Handle GET request for /api/v1/user/
    // Typically, you would fetch user data and send a response
    res.send('User information'); // Example response
});

export default router;
