let qrImgBox = document.getElementById("qr-img-box");
let qrImg = document.getElementById("qr-img");
let genQrCodeBtn = document.getElementById("gen-qr-code");
const toastNotifs = document.querySelector(".toast-notifs");
genQrCodeBtn.addEventListener("click", genQr);
async function genQr() {
  let textUrl = document.getElementById("text-url");
  if (textUrl.value !== "") {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textUrl.value}`;
    qrImgBox.style.display = "block";
  } else {
    qrImgBox.style.display = "none";
    genQrCodeBtn.classList.add("shake-error");
    showToast();
    genQrCodeBtn.classList.add("disable");
    setTimeout(() => {
      genQrCodeBtn.classList.remove("shake-error");
      genQrCodeBtn.classList.remove("disable");
    }, 5000);
  }
}
function showToast() {
  let newToast = document.createElement("div");
  newToast.className = "toast";
  let errorMsg =
    '<i class="fa-solid fa-circle-xmark"></i>Please fill enter some text or url';
  newToast.innerHTML = errorMsg;
  newToast.classList.add("error");
  toastNotifs.appendChild(newToast);
  setTimeout(() => {
    newToast.remove();
  }, 5000);
}
