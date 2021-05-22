// Initializing Server 
const express = require('express');
const bodyParser = require('body-parser')

// making server called app
const app = express();

// connecting routes to Public folder and server
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));



// start listening for connections at port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});