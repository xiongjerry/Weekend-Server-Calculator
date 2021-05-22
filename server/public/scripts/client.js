console.log('JS loaded');

$(handleReady);

function handleReady(){
    console.log('JQuery Loaded');

//function that displays history list
inputDisplay() // --SHOULD BE TIED TO = BUTTON

// CLICK LISTENERS

// function that decides math method

// $('#addBtn').on('click',)
// $('#subtractionBtn').on('click',)
// $('#multBtn').on('click',)
// $('#divisionBtn').on('click',)
// $('#clearBtn').on('click',)

// function that takes in inputs
$('#equalsBtn').on('click', inputs)


} // ends handleReady

function inputs(){
    console.log('adding number inputs');
    let numberIn = {
        numberOne: $('#valueOne').val(),
        numberTwo: $('#valueTwo').val()
    }
    console.log(numberIn); // checking numbers
    
    $.ajax({
        url: '/numbers',
        method: 'POST',
        data: numberIn
    }).then(response =>{
        console.log(response); // should be the same values as above
        inputDisplay(); // updates DOM history
    }).catch(ERR =>{console.log('error');})
} // end inputs

function inputDisplay(){
    console.log('in inputsDisplay');

    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then(function (numbers){
        console.log(numbers);
        // MUST Calculate answer before this function
        //append to the DOM the history
        for(values of numbers){
        $('.history').append(`
        <li>${values.numberOne} ${values.math} ${values.numberTwo} = ANSWER</li>
        `)} // end for loop
        }
    ) //end .then
} // end inputDisplay