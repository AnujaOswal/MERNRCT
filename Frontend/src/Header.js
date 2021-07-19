import React, { useState } from "react";
import "./Header.css";
import { fade,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"black",
  },
  header:
  {
    color:"black",
    backgroundColor:"#fafafa",
    boxShadow:"0px 0px 0px 0px",
    cursor:"pointer",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  
}));
const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <nav id="nav">
        
        <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FastfoodIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Recipe Corner
            </Typography>
            
   
             <ul className="links">
            <li>
              <Link to="/" style={{color:"black"}}>Home</Link>
            </li>
            <li>
              <Link to="/recipe" style={{color:"black"}}>Recipes</Link>
            </li>
            {/* <Route
                  render={({ history }) => (
                    <>
                      <Searchbox className='ml-auto' history={history} />
                    </>
                  )}
                /> */}
          </ul>
      
        </Toolbar>
        </AppBar>
      </div>       
      </nav>
    </header>
  );
};
export default Header;

/**




function Header( {setSearchfood, InputEvent }) {
   
   const classes = useStyles();

    return (
        
        <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FastfoodIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit">
              That recipe
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Your FoodItem Here…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={setSearchfood}
                onChange={InputEvent}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header;
 */