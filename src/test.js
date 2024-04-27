const axios = require('axios');
const fs = require('fs');
const yaml = require('js-yaml');

async function getData(item){
  let data = ''
  let err = null
  const yamlFileContent = fs.readFileSync('./config.yaml', 'utf8');

  try {
    const config = yaml.load(yamlFileContent);
    const response = await axios.get(`https://api.github.com/repos/BhargavBanoth7/${item}/contents/README.md`, {
      headers: {
          Accept: 'application/vnd.github.v3.html', // Use this header to get raw content of the file, 
          Cookie: config.cookie,
          Authorization: `Basic ${btoa(`${config.username}:${config.password}`)}`,
      }
  });
    // console.log(JSON.stringify(response.data));
    data = response.data;
  } catch (error) {
    console.error(error);
    err = error;
  }
  
  console.log("Data:", data);
  return data, err;
}

async function fetchData() {
  let data, err  = await getData("SpaceX");
  if (err != null){
    console.log("Error: ", err);
  }
  console.log("Data: ", data);
}

fetchData();
