console.log('JS loaded');

$(handleReady);

function handleReady(){
    console.log('JQuery Loaded');

//function that displays history list
inputDisplay() // --SHOULD BE TIED TO = BUTTON

// CLICK LISTENERS

// function that decides math method

$('.operator').on('click', inputs)

$('#clearBtn').on('click', clearIn)

$('#equalsBtn').on('click', inputAnswer)


} // ends handleReady

function clearIn (){
    $('#valueOne').val('')
    $('#valueTwo').val('')
}

function inputAnswer(){
    $.ajax({
        method: 'GET',
        url: '/math'
    }).then(function (answer){
        console.log(answer);
    })
}


function inputs(){
    console.log('adding number inputs');
    let numberIn = {
        numberOne: $('#valueOne').val(),
        numberTwo: $('#valueTwo').val(),
        math: $(this).text()
    }

    console.log(numberIn); // checking numbers
    
    $.ajax({
        url: '/numbers',
        method: 'POST',
        data: numberIn
    }).then(response =>{
        inputDisplay(); // updates DOM history
    }).catch(ERR =>{console.log('error');})

} // end inputs

function inputDisplay(){
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then(function (numbers){
        console.log('values being displayed', numbers);
        // clears DOM to update
        $('.history').empty()
        //append to the DOM the history
        for(values of numbers){
        $('.history').append(`<li>
        ${values.numberOne} ${values.math} ${values.numberTwo} = ${values.answer}
        </li>
        `)} // end for loop
        }) //end .then
} // end inputDisplay