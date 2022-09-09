import '../scss/main.scss';

const EMAIL_INPUT = document.querySelector('#email-input');
const EMAIL_SUBMIT_BTN = document.querySelector('#submit-email');

// prevents default behaviour of input field when invalid & adds error msg
EMAIL_INPUT.addEventListener('invalid', event => {
  event.preventDefault();
  EMAIL_INPUT.parentElement.classList.add('active-err');
});

// shows error msg when input field is empty
EMAIL_SUBMIT_BTN.addEventListener('click', () => {
  if (EMAIL_INPUT.value === '')
    EMAIL_INPUT.parentElement.classList.add('active-err');
});

// hides error msg when focused on input field
EMAIL_INPUT.addEventListener('focus', () => EMAIL_INPUT.parentElement.classList.remove('active-err'));

// hides error msg when typing on input field
EMAIL_INPUT.addEventListener('input', () => EMAIL_INPUT.parentElement.classList.remove('active-err'));