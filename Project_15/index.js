const darkThemeToggleBtn = document.getElementById("dark-theme-toggle");
const mainContainer = document.querySelector(".main-container");
darkThemeToggleBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("dark-theme");
  if (darkThemeToggleBtn.classList.contains("fa-moon")) {
    darkThemeToggleBtn.classList.remove("fa-moon");
    darkThemeToggleBtn.classList.add("fa-sun");
  } else {
    darkThemeToggleBtn.classList.remove("fa-sun");
    darkThemeToggleBtn.classList.add("fa-moon");
  }
});
