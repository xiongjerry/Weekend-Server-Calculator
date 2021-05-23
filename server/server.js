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

function math(){
    console.log('in maths');
    let answer;
    console.log(numberArray);
    for(numbers in numberArray ){
        let one = Number(numberArray[numbers].numberOne)
        let two = Number(numberArray[numbers].numberTwo)
    switch (numberArray[numbers].math) {
        case '+':
            answer = one + two;
            console.log(answer);
            numberArray[numbers].answer = answer
            // return numberArray[numbers];    
        break;
        case '-':
            answer = one - two;
            console.log(answer);
            numberArray[numbers].answer = answer
            // return numberArray[numbers];    
        break;
        case '*':
            answer = one * two;
            console.log(answer);
            numberArray[numbers].answer = answer
            // return numberArray[numbers];    
        break;
        case '/':
            answer = one / two;
            console.log(answer);
            numberArray[numbers].answer = answer
            // return numberArray[numbers];    
        break;
    } // end case statement
    } // end for loop
}


//ROUTES - START

// make 'POST' route for inputs & buttons

app.post('/numbers', (req, res) => {
    console.log(req.body);

    numberArray.push(req.body);

    res.sendStatus(201) // KEEP
})

// make 'GET' route to hold inputs

app.get('/numbers', (req, res) =>{
    console.log('going to /numbers');

    //responding with numberArray
    res.send(numberArray);

})

// make a 'GET' route to call math function
app.get('/math', (req, res) =>{
    console.log('going maths');

    //responding with return of math function
    res.send(math());

})

//ROUTES - END

// start listening for connections at port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});