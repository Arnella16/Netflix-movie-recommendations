// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user-route.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path: ".env"
})

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app.get("/", (req,res)=>{
//     res.status(200).json({
//         message:"Hello"
//     })
// })

app.use("/api/v1/user/" , userRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server at port ${process.env.PORT}`);
})
