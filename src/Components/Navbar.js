import React from "react";
import "../styles.css";
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom";

// Adding Navigation bar on the top of the application
function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">

        {/* Adding Portofolio picture */}
        <img src={logo} style={{
          width: 22,height:22}} alt="Logo"/>
        Bhargav Banoth's Portfolio
      </div>

      {/* Adding nav bar options and linking to endpoints*/}
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
