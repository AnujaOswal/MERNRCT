import React from 'react'
import RecipeCard from './RecipeCard.js';
import  { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import AddRecipeComponent from './AddRecipeComponent.js'
import {Searchbox} from './Searchbox.js'
import axios from "axios"
function RecipeComponent(){
  // const [searchRecipe, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const fetchData = async()=>{
	
    const { data } = await axios.get('/recipes')
    console.log(data)
    setRecipes(data)
	}

  useEffect(() => {  
    // Recipe data from the MOCK API
  fetchData() 
  }, []);
   const [searchfood,setSearchfood]=useState("")
   //console.log(recipes)
  const [deletefood,setDeleteFood]=useState("")
const setdeletetitle=(_id)=>{
console.log("_id",_id)
  setRecipes(
    recipes.filter((arr)=>{
      if(!arr._id.includes(_id))
      {
        return arr;
      }
    })
  )
  
}
console.log(recipes)
  return(
          
  <>  
      <Searchbox setSearchfood={setSearchfood} />
    
      {recipes
         .filter((rec)=>{
           if(searchfood==="")
           {
             return rec;
           }
          //  console.log();
          //  console.log(rec);
          //  console.log(rec.title);
           else if(
             
             rec.title.toLowerCase().includes(searchfood.toLowerCase())
        
           )
           {
             return rec;
           }
          
         }) 
         
       
       .map((elem)=>{
        
        //console.log(elem.id)
         return(
          <RecipeCard  id = {elem.id} _id={elem._id} title={elem.title} image={elem.foodimage}  ingredients ={elem.ingredients} deletekey={setdeletetitle}/>

          
          );

        
            })}

        <Link to={`/addRecipe`}>
          <AddRecipeComponent />
        </Link>
      
     {/*container */}

   </>
  )
}

export default RecipeComponent