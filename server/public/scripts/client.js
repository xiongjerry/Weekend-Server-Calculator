console.log('JS loaded');

$(handleReady);

function handleReady(){
    console.log('JQuery Loaded');

//function that displays history list
inputDisplay() // --SHOULD BE TIED TO = BUTTON



// CLICK LISTENERS

$('.operator').on('click', inputs)

$('#clearBtn').on('click', clearIn)

$('#equalsBtn').on('click', inputAnswer)


} // ends handleReady



function clearIn(){
    $('#valueOne').val('')
    $('#valueTwo').val('')
}

function inputAnswer(){
    $.ajax({
        method: 'GET',
        url: '/math'
    }).then(function (answer){
        console.log(answer);
        inputDisplay();
    })
}


function inputs(){
    console.log('adding number inputs');
    let numberIn = {
        numberOne: Number($('#valueOne').val()),
        numberTwo: Number($('#valueTwo').val()),
        math: $(this).text()
    }
    console.log(numberIn); // checking numbers
    
    $.ajax({
        url: '/numbers',
        method: 'POST',
        data: numberIn
    }).then(response =>{
    }).catch(ERR =>{console.log('error');})

} // end inputs

function inputDisplay(){
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then(function (numbers){
        console.log('values being displayed from server', numbers);
        // clears DOM to update
        $('.history').empty()
        // appends answer to DOM
        //append to the DOM the history
        for(values of numbers){
        $('.history').append(`<li>
        ${values.numberOne} ${values.math} ${values.numberTwo} = ${values.answer}
        </li>
        `)
        $('.answer').text(`${values.answer}`)
        } // end for loop
    }) //end .then
} // end inputDisplay