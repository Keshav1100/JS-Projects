const music = document.getElementById("music-audio-file");
const playPause = document.getElementById("play-pause");
const musicProgress = document.getElementById("music-progress");

playPause.addEventListener("click", playPauseMusic);
function playPauseMusic(e) {
  musicProgress.max = music.duration;
  musicProgress.min = "0";

  console.log(e.currentTarget.firstElementChild.className.includes("play"));
  if (e.currentTarget.firstElementChild.className.includes("play")) {
    e.currentTarget.firstElementChild.classList.remove("fa-play");
    e.currentTarget.firstElementChild.classList.add("fa-pause");
    music.play();
    musicProgress.value = Math.floor(music.currentTime);
    // music.value = music.currentTime;
  } else {
    e.currentTarget.firstElementChild.classList.add("fa-play");
    e.currentTarget.firstElementChild.classList.remove("fa-pause");
    music.pause();
    // music.value = music.currentTime;
    musicProgress.value = Math.floor(music.currentTime);
  }
}

if (music.play) {
  setInterval(() => {
    musicProgress.value = Math.floor(music.currentTime);
  }, 1000);
}