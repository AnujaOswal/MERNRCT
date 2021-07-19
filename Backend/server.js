// const express = require("express");
import express from "express";
import router from "./routes/recipe.js";
import { userRouter } from "./routes/user.js";
import dotenv from 'dotenv'

import connectDB from './config/db.js'


dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())


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



//const app = express();
//const PORT = 5000;
///const PORT = process.env.PORT || 5000;

// Opened Connection to DB, movieData - db name

// const url = process.env.MONGODB_URI || "mongodb://localhost/RecipeData";

// mongoose.connect(url, { useNewUrlParser: true });
// const con = mongoose.connection;
// con.on("open", () => console.log("MongoDB is connected"));

// // middleware
// app.use(express.json());

// app.get("/", (request, respone) => {
//   respone.send("Welcome to node app!!!! Hi Guys");
// });

// app.use("/users", userRouter);

// app.use("/recipes", router);

// app.listen(PORT, () => console.log("The server is started in " + PORT));

// npm init - It will package json
// npm install express
// npm install --save-dev nodemon
// npm install mongoose

// ORM - Object–relational mapping

// Create react app - new app
// use this user data