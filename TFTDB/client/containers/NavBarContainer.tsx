import * as React from 'react';
import * as ReactDOM from 'react-router';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

 
const NavBar = () => {
  return (
    <div id="navbar">
      <div id="left-nav">
        <Link className="Link" to="/builder">Builder</Link>
        <Link className="Link" to="/comp-chooser">Comp Chooser</Link>
      </div>
      <div id="center-nav">
        <Link className="Link" to="/">
          TFTDB
        </Link>
      </div>
      <div id="right-nav">
        <Link className="Link" to="/login">Login</Link>
        <Link className="Link" to="/signup">Signup</Link>
      </div>
    </div>
  )
}

export default NavBar;