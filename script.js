const email = document.querySelector('#email');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#fname');
const password = document.querySelector('#password');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('input', onSubmit);

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validateEmail(emailInput){
  return emailRegExp.test(String(emailInput).toLowerCase());
}

function onSubmitEmail(emailInput){
  if (validateEmail(emailInput)){
    return;
  } else {
    email.classList.add('.errinput');
    email.style.outline = 'var(---red)';
    document.querySelector("#erremail").textContent = 'Looks like this is not an email';
    document.querySelector("#erremail").style.visibility = 'visible';
  }
}

function onSubmit(){
  if () {
    document.querySelector(".greenButton").textContent = `Form filled successfully!`;
  } else {
    
  }
}


  