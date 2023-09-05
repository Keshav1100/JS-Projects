const submitBtn = document.getElementById("submit-btn");
const popupOkBtn = document.getElementById("popup-ok-btn");
const popupContainer = document.querySelector(".popup-container");
// Function to show popup
function showPopup() {
  popupContainer.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
  popupContainer.style.visibility = "visible";
}
// Function to hide popup
function hidePopup() {
  popupContainer.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  popupContainer.style.visibility = "hidden";
}
submitBtn.addEventListener("click", showPopup);
popupOkBtn.addEventListener("click", hidePopup);
