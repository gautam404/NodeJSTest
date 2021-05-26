const cron = require("node-cron");
const express = require("express");
  
app = express(); // Initializing app
  
// Creating a cron job which runs on every 10 second
cron.schedule("*/5 * * * * *", function() {
	var axios = require('axios');
const now = new Date((new Date()).getTime() + 1000 * 3600 * 18);
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = (day) +"-" + (month) +"-"+now.getFullYear() ;
var config = {
  method: 'get',
  url: 'https://telectronics.in/CoAPI/covid.php',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
  }
};

axios(config)
.then(function (response) {
	console.log(response.data);
    console.log("running a task every 5 second");
});
  
app.listen(3000);