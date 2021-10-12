// const express = require("express");
import express from "express";
import router from "./routes/recipe.js";
import { userRouter } from "./routes/user.js";
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config();

connectDB();

const app = express()

app.use(express.json())

// if(process.env.NODE_ENV === 'development')
// {
//     app.use(morgan('dev'));
// }

app.use("/users", userRouter);
app.use("/recipes", router);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('Frontend/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is Running...')
  })
}

const PORT = process.env.PORT || 5000


app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)

