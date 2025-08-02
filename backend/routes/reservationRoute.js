import express from "express";
import send_Reservation from "../controller/reservation.js"; 
const router= express.Router();

router.post("/send",send_Reservation);


export default router;