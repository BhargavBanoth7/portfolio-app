import React, { useState, useEffect } from 'react';
import "../styles.css";
import "./Portfolio.css"
import axios from "axios";
import yaml from 'js-yaml';
import backgroundImage from "../images/trading_bgd.png"

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
};

// Portfolio() returns the page content on /portfolio
const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [apiData, setApiData] = useState(null);
    const [error, setError]= useState(null);

    // Call fetchData when selectedItem changes
    useEffect(() => {
        async function fetchData(){
            const config = await fetch('../config.yaml');
            const yamlContent = await config.text();
            
            try {
                // Parse the YAML content
                const config = yaml.load(yamlContent);
                
                // Fetching data from GitHub APIs
                const response = await axios.get(`https://api.github.com/repos/BhargavBanoth7/${selectedItem}/contents/README.md`, {
                    headers: {
                        Accept: 'application/vnd.github.v3.raw',
                        Cookie: config.cookie,
                        Authorization: `Basic ${btoa(`${config.username}:${config.password}`)}`,
                    }
                });
                // Saving the response data
                setApiData(response.data);
            } catch (error) {
            setError(error.message);
            }
        }
        fetchData();
    }, [selectedItem]);
  
    // Event handler for dropdown selection change
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedItem(selectedValue);
    };
  
    return (
    <div className="Portfolio" style={containerStyle}>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
            <br/>
            List of My projects:&nbsp;
            <select value={selectedItem} onChange={handleSelectChange}>
                <option value="">Select a project</option>
                <option value="RoadMap">RoadMap</option>
                <option value="SpaceX">SpaceX</option>
            </select>
            {/* <p> Error: {error}</p> */}
            <div class = "readme">
                {apiData && <pre className='readme-content'>{apiData}</pre>}
            </div>
        </div>
    </div>
    );
  };

export default Portfolio;
