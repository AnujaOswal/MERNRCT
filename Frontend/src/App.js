import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Routes from './routes/Routes.js'
import AuthApi from './utils/AuthApi'

function App() {

const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
          <Router>
            <Routes/>         
          </Router>
       </AuthApi.Provider>  
    </div>
  );
}

export default App;
