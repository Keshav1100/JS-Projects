const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const numberField = document.getElementById("number");
const msgField = document.getElementById("msg");
const submitBtn = document.getElementById("submit-btn");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const numberError = document.getElementById("number-error");
const msgError = document.getElementById("msg-error");
const submitError = document.getElementById("submit-error");
const popupOkBtn = document.getElementById("popup-ok-btn");
const popupContainer = document.querySelector(".popup-container");

nameField.addEventListener("keyup", validateName);
numberField.addEventListener("keyup", validateNumber);
emailField.addEventListener("keyup", validateEmail);
msgField.addEventListener("keyup", validateMsg);
submitBtn.addEventListener("click", validateSubmit);
popupOkBtn.addEventListener("click", hidePopup);
// Function to show popup
function showPopup() {
  popupContainer.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
  popupContainer.style.visibility = "visible";
  document.querySelector("form").style.opacity = "0.4";
}
// Function to hide popup
function hidePopup() {
  popupContainer.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  popupContainer.style.visibility = "hidden";
  document.querySelector("form").style.opacity = "1";
  formReset();
}
// Function to reset the form after submitting
function formReset() {
  nameField.value = "";
  emailField.value = "";
  numberField.value = "";
  msgField.value = "";
}
// Function to validate name
function validateName(e) {
  if (e.currentTarget.value.length === 0) {
    nameError.innerText = "This is a required field";
    nameError.style.display = "block";
  } else if (e.currentTarget.value.match(/\w\s\w/) === null) {
    nameError.innerText = "Please enter full name";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
}
// Function to validate number
function validateNumber(e) {
  if (e.currentTarget.value.length === 0) {
    numberError.innerText = "This is a required field";
    numberError.style.display = "block";
  } else if (
    e.currentTarget.value.match(/\d\d\d\d\d\d\d\d\d\d/) === null ||
    e.currentTarget.value.length > 10
  ) {
    numberError.innerText = "Please enter a valid number";
    numberError.style.display = "block";
  } else {
    numberError.style.display = "none";
  }
}
// Function to validate email
function validateEmail(e) {
  if (e.currentTarget.value.length === 0) {
    emailError.innerText = "This is a required field";
    emailError.style.display = "block";
  } else if (
    e.currentTarget.value.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g) === null
  ) {
    emailError.innerText = "Please enter a valid email";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}
// Function to validate message
function validateMsg(e) {
  if (e.currentTarget.value.length === 0) {
    msgError.innerText = "This is a required field";
    msgError.style.display = "block";
  } else if (e.currentTarget.value.length < 30) {
    msgError.innerText = `Enter atleast ${
      30 - e.currentTarget.value.length
    } characters more.`;
    msgError.style.display = "block";
  } else {
    msgError.style.display = "none";
  }
}
// Function to validate the form fields for submit action
function validateSubmit(e) {
  e.preventDefault();
  let formSpans = document.querySelectorAll(".input-box span");
  formSpans.forEach((span) => {
    console.log(span.previousElementSibling.value);
    if (
      span.style.display === "block" ||
      span.previousElementSibling.value === ""
    ) {
      submitError.innerText = "Please fill all the required fields.";
      submitError.style.display = "block";
      setTimeout(() => {
        submitError.style.display = "none";
      }, 4000);
    } else {
      showPopup();
      submitError.style.display = "none";
    }
  });
}
