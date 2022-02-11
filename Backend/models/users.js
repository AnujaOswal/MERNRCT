import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    password :{
        type:String,
    },
});
userSchema.statics.findUser = async function (email, password) {
    const user = await Users.findOne({ email});
    console.log(user,'==');
    if(!user){
      return;
    }
    
    const isMatch =await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if(!isMatch){
      return;
    }
    return user;
  };

  //before saving encrypt psd
userSchema.pre('save',async function (next) {
  const user = this;//refer to user
  if(user.isModified('password'))
  {
    user.password= await bcrypt.hash(user.password,8);
  }
  next();
});
export const Users=mongoose.model("User",userSchema);
