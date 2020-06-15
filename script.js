let form = document.querySelector("#parking-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //all of your code here, as many lines as you want
})

//Input fields
let name = document.getElementById('name');
let carYear = document.getElementById('car-year');
let carMake = document.getElementById('car-make');
let carModel = document.getElementById('car-model');
let parkingDate = document.getElementById('start-date');
let dayNumber = document.getElementById('days');
let creditCard = document.getElementById('credit-card');
let cvv = document.getElementById('cvv');
let expiration = document.getElementById('expiration');
let nameField = document.querySelector('#name-field')



//set name error to red
function validNameRed () { 
  if (name.value === '') {
    nameField.classList.add('input-invalid')
  } 
  else{
    nameField.classList.add('input-valid')
  }
};

//create function
function validateName () {
  //check if empty
  if (checkIfEmpty(name)) return;
}

function checkIfEmpty(field) {
  //makes it so error will pop up if just a space is put in the box
  if (isEmpty(field.value.trim())) {
    //set field invalid
    setInvalid(field, `${field.name} must not be empty`);
    return true;

  } else {
    //set field valid, does not have error message like setInvalid because it is valid
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  //if value is equal to an empty string/empty space return true that it is invalid
  if (value === '') return true;
  //return false for if there is something in the box
  return false;
}

function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;

}

function setValid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = "";
}




// })