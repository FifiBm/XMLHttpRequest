//first open the integrated terminal 
//npm init
//npm i nodemon
//add "start": "nodemon"  to scripts
//npm i xhr2

//create a variable called XMLHttpRequest to require ("xhr");
//create a variable called xhr and set it equal to a new XMLHttpRequest()

//create a variable for url and set it equal to 'https://dog.ceo/api/breeds/list/all'
var XMLHttpRequest = require ( "xhr2" );
var xhr = new XMLHttpRequest();

var url = 'https://dog.ceo/api/breeds/list/all';

var method = 'GET';

//use xhr variable with open method
//pass in methos and url as paramenters

xhr.open (method, url);


//when we make to connection, this is what the property will be
//DONE means operation is completed and we've done the response

//use xhr variable with onreadystatechange and set equal to anonymous function
//create if/else if state for DONE XMLHttpRequest && 200 status
//create parsedJSON varible for JSON.parse method
//log beagle, elkhound, hound, papillon, and spaniel
//use else/if to log error

xhr.open (method, url);
xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        var parsedJSON = JSON.parse(xhr.responseText).message
        //console.log(parsedJSON);
        console.log(parsedJSON.beagle);
        console.log(parsedJSON.elkhound);
        console.log(parsedJSON.hound);
        console.log(parsedJSON.papillon);
        console.log(parsedJSON.spaniel);
    } else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200){
    console.log('Error')}
        else {
            console.log('Error')
        }
    }



//use send 
xhr.send();
