const galleryContainer = document.querySelector(".gallery");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
galleryContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  galleryContainer.scrollLeft += e.deltaY;
});
leftBtn.addEventListener("click", () => {
  console.log("clicked left");
  galleryContainer.scrollLeft -= galleryContainer.clientWidth;
});
rightBtn.addEventListener("click", () => {
  console.log("clicked left");
  galleryContainer.scrollLeft += galleryContainer.clientWidth;
});
