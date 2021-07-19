import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
id:{
    type:String,
    requried: true,
},

avatar:{
    type: String,
    requried: true,
},

name:{
    type: String,
    requried: true,
},
createdAt:{
    type: String,
    requried: true,
},
// userid:{
//     type:Number
// }
});

export const Users=mongoose.model("User",userSchema);
