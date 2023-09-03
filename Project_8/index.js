let qrImgBox = document.getElementById("qr-img-box");
let qrImg = document.getElementById("qr-img");
let genQrCodeBtn = document.getElementById("gen-qr-code");
genQrCodeBtn.addEventListener("click", genQr);
async function genQr() {
  let textUrl = document.getElementById("text-url");
  if (textUrl.value !== "") {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textUrl.value}`;
    qrImgBox.style.display = "block";
  } else {
    qrImgBox.style.display = "none";
    genQrCodeBtn.classList.add("shake-error");
    setTimeout(() => {
      genQrCodeBtn.classList.remove("shake-error");
    }, 2000);
  }
}
