const email = document.querySelector('#email');
const erremail = document.querySelector('#erremail');
const submitButton = document.querySelector('#submitButton');
const fields = document.querySelectorAll('input');

let counter = 0;
const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

submitButton.addEventListener('click', onSubmit);

function validateEmail(emailInput){
  return emailRegExp.test(String(emailInput).toLowerCase());
}

function onSubmit() {
  counter = 0;

  fields.forEach(field => {
    if (field.value == '') {
    field.nextElementSibling.style.visibility = "visible";
    field.nextElementSibling.textContent = "Please, fill this field";
    field.style.border = '2px solid var(--red)';
    counter++;
  } else {
    field.nextElementSibling.style.visibility = "hidden";
    field.style.border = '1px solid var(--grayishBlue)';
  }});
  
  if (validateEmail(email.value)) {
    email.classList.remove('errinput');
    email.style.outline = '';
    erremail.textContent = '';
    erremail.style.visibility = 'hidden';
    email.style.border = '1px solid var(--grayishBlue)';
  } else {
    erremail.textContent = 'Looks like this is not an email';
    email.style.visibility = 'visible';
    email.style.border = '2px solid var(--red)';
    counter++;
  }
  
  if (counter == 0) {
    document.querySelector(".greenButton").textContent = "Submit successful!";
  } else {
    document.querySelector(".greenButton").textContent = "Claim your free trial";
  }
}