const express = require('express')
const app = express();
const os = require('os');
const systemCpuCores = os.cpus();
require('dotenv').config()




app.all('/', (req, res) => {
    console.log("Just got a request!");
    console.log(process.env.GOOGLE_KEY);
    res.jsonp((systemCpuCores) );
});


app.listen(process.env.PORT || 3000)