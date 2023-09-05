const submitBtn = document.getElementById("submit-btn");
const popupOkBtn = document.getElementById("popup-ok-btn");
const popupContainer = document.querySelector(".popup-container");
function showPopup() {
  popupContainer.classList.remove("popup-hide");
  popupContainer.classList.add("popup-show");
}
function hidePopup() {
    popupContainer.classList.add("popup-hide");
    popupContainer.classList.remove("popup-show");
}
submitBtn.addEventListener("click", showPopup);
popupOkBtn.addEventListener("click", hidePopup);
