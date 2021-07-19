import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './App.css';

function Searchbox({ setSearchfood }) {
  return (
    <div className="wrap">
    <div className="search">
      <div>
        {/* Searchbar for the filter function */}
        <input
          type="text"
          placeholder="Search your fav food recipe"
          className="searchTerm" 
          onChange={(event) => setSearchfood(event.target.value)}
        ></input>
        <i class="fa fa-search"></i>
      </div>
    </div>
    </div>
  );
}

export { Searchbox };
