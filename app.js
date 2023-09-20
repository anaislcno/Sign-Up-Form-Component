const firstNameEl = document.querySelector("#firstname");
const lastNameEl = document.querySelector("#lastname");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#pass");

const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");

// Fonctions d'utilité

const isRequired = (value) => (value.trim() === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const isRegexValid = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

// Fonction error

const showError = (input, message) => {
  input.classList.remove("success");
  input.classList.add("error");

  const error = input.nextElementSibling;
  error.textContent = message;
};

// Fonction success

const showSuccess = (input) => {
  input.classList.remove("error");
  input.classList.add("success");

  const error = input.nextElementSibling;
  error.textContent = "";
};

// Fonctions de vérifications des champs

const checkFirstName = () => {
  let valid = false;
  const firstName = firstNameEl.value.trim();

  if (!isRequired(firstName)) {
    showError(firstNameEl, "First Name cannot be empty");
  } else {
    showSuccess(firstNameEl);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;

  const lastName = lastNameEl.value.trim();

  if (!isRequired(lastName)) {
    showError(lastNameEl, "Last Name cannot be empty");
  } else {
    showSuccess(lastNameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be empty");
  } else if (!isRegexValid(email)) {
    showError(emailEl, "Looks like this is not an email");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Password cannot be emmpty.");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

// Fonction au submit

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isFirstNameValid = checkFirstName();
  let isLastNameValid = checkLastName();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();

  let isFormValid =
    isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

  if (isFormValid) {
    console.log("Form is valid");
  }
});
