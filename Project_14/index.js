const showHideBtn = document.querySelector(".show-hide");
const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye-icon");
showHideBtn.addEventListener("click", () => {
  if (eyeIcon.classList.contains("fa-eye")) {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
    passwordInput.type = "password";
  } else {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    passwordInput.type = "text";
  }
});
