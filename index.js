const cron = require("node-cron");
const express = require("express");
  
app = express(); // Initializing app
  
// Creating a cron job which runs on every 10 second
cron.schedule("*/5 * * * * *", function() {
	var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://3.108.87.80/covid.php',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
  }
};

axios(config)
.then(function (response) {
	  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
    console.log("running a task every 5 second");
});
  
app.listen(process.env.PORT || 5000);

app2 = express(); // Initializing app
  
// Creating a cron job which runs on every 10 second
cron.schedule("*/20 * * * *", function() {
	var axios2 = require('axios');

var config2 = {
  method: 'get',
  url: 'https://cowinalertapi.herokuapp.com/',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
  }
};

axios(config2)
.then(function (response) {
	  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
    console.log("running a task every 10 min");
});
  
app2.listen(process.env.PORT || 5000);