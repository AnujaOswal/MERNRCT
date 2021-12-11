import React, { useState } from 'react'
import '../App.css';

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
          style={{margin:"20px" ,padding:"10px",borderRadius:"25px",border:"1px solid #379683"}}
          onChange={(event) => setSearchfood(event.target.value)}
        ></input>
        <i class="fa fa-search" style={{fontSize:"large"}}></i>
      </div>
    </div>
    </div>
  );
}

export { Searchbox };
