console.log('JS loaded');

$(handleReady);

function handleReady(){
    console.log('JQuery Loaded');

//function that displays history list
inputDisplay()

// CLICK LISTENERS

// function that decides math method
math();

// function that takes in inputs
inputs();

}

function inputs();
    console.log('adding number inputs');


function inputDisplay(){
    console.log('in inputsDisplay');

    $.ajax({
        methods: 'GET',
        url: '/numbers'
    }).then(function (numbers){
        console.log(numbers);
        // MUST Calculate answer before this function
        //append to the DOM the history
        $('.history').append(`
        <li>${numbers[0].numberOne} ${numbers[0].math} ${numbers[0].numberTwo} = ANSWER</li>
        `)}) //end .then
} // end inputDisplay