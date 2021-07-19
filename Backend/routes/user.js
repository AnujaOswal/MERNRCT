import express from "express";
import { Users } from "../models/users.js";
const router = express.Router();

router
.route("/")
.get(async (request, respone) => {
  const users = await Users.find();
  respone.send(users);
})
// Use insertMany insertOne
// Add Users - recipe router
.post( async (request, respone) => {
    const addUser = request.body;
    console.log(addUser);
  
    // const user = new Users({
    //   id: addUser.id,
    //   avatar: addUser.avatar,
    //   createdAt: addUser.createdAt,
    //   name: addUser.name,
    //   //userid:addUser.userid
    // });
  
    const user = new Users(addUser);
  
    try {
      const newUser = await user.save();
      respone.send(newUser);
    } catch (err) {
      respone.status(500);
      respone.send(err);
    }
  });

router
.route("/:id")  
.get( async (request, respone) => {
  const { id } = request.params;
  const user = await Users.findOne({ id: id });
  respone.send(user);
})

// ORM - mongoDB deleteOne, couchDB removeOne // U can interact with multiple database
// Migration is a breeze
// remove
.delete( async (request, respone) => {
  const { id } = request.params;
  try {
    const user = await Users.findById(id);
    await user.remove();
    // console.log();
    respone.send({
      name: user.name,
      id: user.id,
      message: "Deleted successfully" });
  } catch (err) {
    respone.status(500);
    respone.send("User is missing");
  }
})
.patch(async (request, respone) => {
  const { id } = request.params;
  const { name, avatar } = request.body;

  try {
    const user = await Users.findById(id);
    if (name) {
      user.name = name;
    }
    if (avatar) {
      user.avatar = avatar;
    }
    await user.save();
    respone.send(user);
  } catch (err) {
    respone.status(500);
    respone.send(err);
  }
});

export const userRouter = router;