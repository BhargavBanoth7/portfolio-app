import React from 'react';
const axios = require('axios');

async function fetchData(url) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://github.com/BhargavBanoth7/SpaceX/blob/master/README.md',
    headers: { 
      'Cookie': '_gh_sess=5RUrzoJ7iSMDPSoEqsrpHAnGMPlvNhi305bKDqFpfZsFx2wyU22W%2BLF7C5muDqDcOF0s4CTMQz%2Fh1ToMt1DB7JlfNxBecD7a6dUAR6dalF6uiw3fhqBS1CGa6gA55dhuj5y392%2BpXav4sdVsDLR4nOOt08i9crOFHi%2BOQlR7HyNZRDxY5fY4oGNMg%2BgBqnaNKN6V90nVwY8MLCRTSMiCaPS%2BGIFqq3hMLrrtBKjAZatuvR8McwhVW8qRTWAq4y1GaVG570ROhDCTi5988lkcxw%3D%3D--Jm%2F57uHJmqQaPWz4--hAdSC%2FaCMgezj%2BAgN1YI3w%3D%3D; _octo=GH1.1.424705881.1714188042; logged_in=no'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}

function Dropdown({ onSelect }) {
  const items = [
    { id: 1, name: 'RoadMap', url:'https://github.com/BhargavBanoth7/Roadmap/blob/main/README.md'},
    { id: 2, name: 'SpaceX', url:'https://github.com/BhargavBanoth7/SpaceX/blob/main/README.md' },
  ];

  return (
    <select onChange={(e) => onSelect(e.target.value, e.target.selectedOptions[0].getAttribute('data-url'))}>
        <option value="">Select a project</option> 
        {items.map(item => (
        <option key={item.id} value={item.
          id} data-url={item.url}>{item.name}</option>
        ))}
  </select>
  );
}

export default Dropdown;