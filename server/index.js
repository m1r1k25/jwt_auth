import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import cookieParser from "cookie-parser"

dotenv.config()

const PORT = process.env.PORT
const app = express()

const start = () => {
  try {
    
    app.listen(PORT, () => console.log(process.env.PORT))
  } catch(e) {
    console.log(e)
  }
}

start()