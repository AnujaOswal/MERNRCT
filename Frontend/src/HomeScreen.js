import React from "react";
//import { Link} from "react-router-dom";

import heroimg from "./images/homechef.svg";
import "./HomeScreen.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";  
const HomeScreen = () => {
  return (
    <div className="hero">
      <img src={heroimg} alt="breakfast" />    
      <div className="content">
        <h1>
         Let's Start<br/>Cooking With <br/> Popular Recipes
        </h1>
        <p className="description">
          The food reflects emotion! Here are some classic recipes from all over
          the world.
        </p>
       
        <Link to="/recipe">
          <button className="btn-order" style={{borderRadius:"1px"}}>Browse Recipes</button>
        
        </Link>
       
      </div>
  
    </div>
  );
};

export default HomeScreen;