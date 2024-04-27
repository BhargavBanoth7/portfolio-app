import React from "react";
import "../styles.css";
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">

        <img src={logo} style={{
          width: 22,height:22}} alt="Logo"/>
        Bhargav Banoth's Portfolio
      </div>
      
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
}

export default Navbar;