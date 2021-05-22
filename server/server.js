// Initializing Server 
const express = require('express');
const bodyParser = require('body-parser')

// making server called app
const app = express();

// connecting routes to Public folder and server
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));

//VARIABLES

// array to hold both input values and math operator. length should always be 3
const numberArray = [{
    numberOne: 'test1',
    numberTwo: 'test2',
    math:      '/',
}]

function math(numberArray){

}


//ROUTES - START

// make 'POST' route for inputs & buttons

app.post('/numbers', (req, res) => {
    console.log(req.body);

    numberArray.push(req.body);

    res.sendStatus(201) // catch for functionality
})



// make 'GET' route to hold inputs

app.get('/numbers', (req,res) =>{
    console.log('going to /numbers');
    //responding with numberArray
    res.send(numberArray);
})




//ROUTES - END

// start listening for connections at port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});