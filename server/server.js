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
const numberArray = []

function math(numberArray){
    console.log('in maths');
    let answer;

    switch (numberArray[0].math) {
        case '+':
            answer = numberArray[0].numberOne + numberArray[0].numberTwo
            return answer;    
        break;
        case '-':
            answer = numbOne - numbTwo
            return numberArray.answer = answer;    
        break;
        case '*':
            answer = numbOne * numbTwo
            return numberArray.answer = answer;    
        break;
        case '/':
            answer = numbOne / numbTwo
            return numberArray.answer = answer;    
        break;
    } // end case statement
}


//ROUTES - START

// make 'POST' route for inputs & buttons

app.post('/numbers', (req, res) => {
    console.log(req.body);

    numberArray.push(req.body);

    res.sendStatus(201) // catch for functionality
})

// make 'GET' route to hold inputs

app.get('/numbers', (req, res) =>{
    console.log('going to /numbers');

    //responding with numberArray
    res.send(numberArray);

    res.sendStatus(201)
})

// make a 'GET' route to call math function
app.get('/math', (req, res) =>{
    console.log('going maths');

    //responding with return of math function
    res.send(math(numberArray));

    res.sendStatus(201)
})

//ROUTES - END

// start listening for connections at port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});