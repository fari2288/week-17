let price = document.querySelector('#price');
let option1= document.querySelector('#22000');
let option2 = document.querySelector('#25000');
let option3= document.querySelector('#30000');
let option4 = document.querySelector('#35000');
let services = document.querySelector('services');
let frame= document.querySelector('frame');
let constructor = document.querySelector('constructor');
let jeep= document.querySelector('jeep');
let parts = document.querySelector('parts');
let oil= document.querySelector('oil');
let diesel = document.querySelector('diesel');
let electric= document.querySelector('electric');
let power = document.querySelector('power');
let three= document.querySelector('three');
let three_five = document.querySelector('three_five');
let five_seven= document.querySelector('five_seven');
let seven = document.querySelector('seven');
let option1= document.querySelector('#22000');
let option2 = document.querySelector('#25000');
let option1= document.querySelector('person');
let option2 = document.querySelector('entity');



function selectCar() {
    if (document.getElementById('cars').value == 'bmw') 
    {
    let parent = document.querySelector('#x5');

    let cartype= document.createElement('option');

    parent.appendChild(cartype);

    cartype.innerHTML = '<option name="имя" value="" id="a5">x5</option>';
    document.getElementById('x5').innerHTML = '';
    }
}



