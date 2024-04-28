import React from "react";
import "../styles.css";
import backgroundImage from "../images/bgd.jpg"

// css styling for about page
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
  backgroundColor: 'rgba(255, 255, 255, 0.55)',
};

const contentStyle = {
  position: 'relative',
  zIndex: 1,
  padding: '150px',
};

// About() returns the page content on /about
function About() {
  return (
    <div className="About" style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <p>
          <b>Hello! I'm Bhargav Banoth, 
          and I'm excited to share a glimpse of who I am:</b>
        </p><br/>

        <ul>
          <li>
            <b>Passionate Traveler: </b>
            I love exploring new places and seeking out diverse experiences.
          </li><br/>

          <li>
            <b>Creative at Heart: </b>
            From writing to photography, I enjoy expressing myself creatively.
          </li><br/>

          <li>
            <b>Curious Adventurer: </b>
            Life's an adventure, and I'm always eager to discover new perspectives.
          </li><br/>

          <li>  
            <b>Tech Enthusiast: </b>
            Fascinated by innovation and the impact of technology on our world.
          </li><br/>

          <li>
            <b>Community Builder: </b>
            I believe in the power of connection and making a positive difference.
          </li><br/>
        </ul>

        <p>
          Thanks for stopping by—I'm looking forward to connecting with fellow adventurers and creatives like you!
        </p>

      </div>
    </div>
    );
}

export default About;
