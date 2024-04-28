import React from "react";
import "../styles.css";
import dp from "../images/bhargav.jpg"
import backgroundImage from "../images/trading_bgd.png"

// page styling for layout of resume page
const containerStyle = {
  position: 'relative',
  minHeight: '100vh',
  background: `url(${backgroundImage}) center/cover no-repeat`,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
};

const contentStyle = {
  position: 'relative',
  zIndex: 1,
  padding: '150px',
};

// Home() returns the page content on /home
function Home() {
  return (
    <div className="Home" style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
      <br/><br/><br/>

      <img src={dp} style={{
          borderRadius: "50%",
          width: 350,
          height: 350,
          // background: "red",
        }} alt="passportPhoto"/>
      <br/><br/>
      
      <h4>
        Hi I am Bhargav , But I like when u call me Big B
      </h4>
      </div>
    </div>
  );
}

export default Home;
