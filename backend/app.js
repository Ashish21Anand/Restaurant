import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" }); // 👈 this must come at the top
console.log("Frontend URL is:", process.env.FRONTEND_URL);


import express from "express";
import cors from "cors";
////import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js';

//dotenv.config({ path:"./config/config.env"});
const app=express();
console.log(process.env.FRONTEND_URL);
console.log("CORS Origin:", process.env.FRONTEND_URL);



app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true,  
})
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);

app.get("/",(req,res,next)=>{return res.status(200).json({
    success:true,
    message:"HELLO WORLD",
});
});

dbConnection();

app.use(errorMiddleware);
export default app;