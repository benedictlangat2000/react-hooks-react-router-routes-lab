// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <li>
  <ul> <NavLink exact to="/">Home</NavLink></ul>
   <ul> <NavLink to="/movies">Movies</NavLink></ul>
   <ul> <NavLink to="/directors">Directors</NavLink></ul> <br />
   <ul><NavLink to="/actors">Actors</NavLink></ul>
    
      </li>
    </div>
  );
}

export default NavBar;
