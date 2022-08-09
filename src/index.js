import './style.css';
import countries from 'countries-list';

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');
const zipcode = document.getElementById('zipcode');
const zipcodeError = document.querySelector('#zipcode + span.error');
const password = document.getElementById('password');
const passConfirm = document.getElementById('passconfirm');
const passwordError = document.querySelector('#passconfirm + span.error');
const countryList = countries.countries;

function validateEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  }
  emailError.className = 'error active';
}

function validateCountry() {
  if (country.validity.valueMissing) {
    countryError.textContent = 'You need to select a country.';
  }
  countryError.className = 'error active';
}

function validateZipcode() {
  if (zipcode.validity.valueMissing) {
    zipcodeError.textContent = 'You need to enter a zipcode.';
  } else if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = 'Entered value needs to be a zipcode.';
  }
  zipcodeError.className = 'error active';
}

function validatePassword() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password.';
  } else if (password.value !== passConfirm.value) {
    passwordError.textContent = 'Passwords do not match.';
  }
  passwordError.className = 'error active';
}

Object.values(countryList).forEach((item) => {
  const newCountry = document.createElement('option');
  newCountry.innerText = item.name;
  country.appendChild(newCountry);
});

form.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    validateEmail();
    e.preventDefault();
  }
});

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    validateEmail();
  }
});

country.addEventListener('change', () => {
  if (country.value !== '') {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    validateCountry();
  }
});

zipcode.addEventListener('input', () => {
  if (!zipcode.validity.valid) {
    zipcodeError.textContent = '';
    zipcodeError.className = 'error';
  } else {
    validateZipcode();
  }
});

password.addEventListener('input', () => {
  if (!password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    validatePassword();
  }
});

passConfirm.addEventListener('input', () => {
  if (!passConfirm.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    validatePassword();
  }
});
