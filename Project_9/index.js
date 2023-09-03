const succesBtn = document.getElementById("success-btn");
const errorBtn = document.getElementById("error-btn");
const invalidBtn = document.getElementById("invalid-btn");
const toastNotifs = document.querySelector(".toast-notifs");
const btns = document.querySelectorAll(".btn");

let successMsg =
  ' <i class="fa-solid fa-circle-check"></i>Successfully submitted';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error';

function showToasts(msg) {
  let newToast = document.createElement("div");
  newToast.className = "toast";
  if (msg === "error") {
    newToast.innerHTML = errorMsg;
    newToast.classList.add("error");
  } else if (msg === "success") {
    newToast.innerHTML = successMsg;
    newToast.classList.add("success");
  } else if (msg === "invalid") {
    newToast.innerHTML = invalidMsg;
    newToast.classList.add("invalid");
  }
  toastNotifs.appendChild(newToast);
  setTimeout(() => {
    newToast.remove();
  }, 5000);
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showToasts(`${e.target.id.split("-")[0]}`);
  });
});
