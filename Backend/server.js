// const express = require("express");
import express from "express";
import router from "./routes/recipe.js";
import { userRouter } from "./routes/user.js";
import dotenv from 'dotenv'

import connectDB from './config/db.js'
dotenv.config({ path : "./config/.env" });

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

// if(process.env.NODE_ENV === 'development')
// {
//     app.use(morgan('dev'));
// }

app.use("/users", userRouter);
app.use("/recipes", router);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is Running...')
  })
}



app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)

