const email = document.querySelector('#email');
email.addEventListener('input', onInput);

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
    if (isEmailValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  }
  
  input.addEventListener('input', onInput);
  
  function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
  }