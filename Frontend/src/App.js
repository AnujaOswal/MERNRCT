import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import HomeScreen from './HomeScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import RecipeComponent from './RecipeComponent.js'
import Form from './Form.js'
import { Register } from './AuthPages/RegisterScreen/Register';
import { Login } from './AuthPages/loginScreen/Login';

function App() {

  

  return (
    <div className="App">
      <>
      
      
          <Router>
            
          <Header/>
            <>      
          

            {/*add recipe page */}
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/recipe" component={RecipeComponent}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/addRecipe" component={Form}/>
            
     

            {/* <Route exact path="/">
            <HomeScreen/>
            </Route> */}
            </> 
          
          </Router>
   
      </>
    </div>
  );
}

export default App;
