import React from 'react'
import '../App.css';
import HomeScreen from './HomeScreen'
import Header from './Header.js'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; 
import RecipeComponent from './RecipeComponent.js'
import Form from './Form.js'


export const Main = () => {
    //if authorised directly try to visit home page it redirect to signin page
    // if(!auth)
    // {
    //     return <Redirect to="/signin"/>
    // }
    return (
        <div>
             <Router>
              <Header/>
                <>
                    {/*add recipe page */}
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route path="/recipe" component={RecipeComponent}/>
                    <Route path="/addRecipe" component={Form}/>
                </> 
          
             </Router>
        </div>
    )
}
