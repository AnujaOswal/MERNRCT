import express from "express";
import { Recipes } from "../models/recipe.js";
//import bcrypt from "bcrypt";

const router = express.Router();

router
.route("/")
.get(async (request, respone) => {
  const recipe = await Recipes.find();
  respone.json(recipe);
})
.post( async (request, respone) => {
  const addRecipe = request.body;
  console.log(addRecipe);
  const recipe = new Recipes(addRecipe);

  try {
    const newRecipe = await recipe.save();
    respone.send(newRecipe);
  } catch (err) {
    respone.status(500);
    respone.send(err);
  }
});

router
.route("/:id")
.get( async (request, respone) => {
  //const { id } = request.params;
  const recipe = await Recipes.find({id:request.params.id});
  respone.json(recipe);
  console.log(recipe);
 
  
})


.delete( async (request, respone) => {
  // const { id } = request.params;
  
  console.log(id);
  try {
    const recipe = await Recipes.findById({'_id': ObjectId(request.params.id)});  
    await recipe.remove();
    // console.log();
    respone.json({
      title: recipe.title,
      id: recipe.id,
      _id:recipe._id,
      message: "Recipe Deleted successfully" });

  } catch (err) {
    respone.status(500);
    respone.send("recipe is missing");
  }
})
.patch(async (request, respone) => {
  const { id } = request.params;
  const { title, foodimage ,ingredients} = request.body;
 console.log(title)
  try {
    const recipe = await Recipes.findById(id);  
    if (title) {
      recipe.title = title;
    }
    if (foodimage) {
      recipe.foodimage = foodimage;
    }
    if(ingredients)
    {
      recipe.ingredients=ingredients;
    }
    await recipe.save();
    respone.send(recipe);
  } catch (err) {
    respone.status(500);
    respone.send(err);
  }
});

export default router;


// async function genHash()
// {
//   const password="password@123";
//   const salt=await bcrypt.getSalt(10);
//   const passwordHash =await bcrypt.hash(password,salt);
//   console.log(salt,passwordHash);

  
// }
// genHash();