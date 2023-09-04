const hr = document.getElementById("hr-display");
const min = document.getElementById("min-display");
const sec = document.getElementById("sec-display");
const lapsBox = document.querySelector(".laps")
const playPauseBtn = document.getElementById("play-pause-btn");
const stopBtn = document.getElementById("stop-btn");
const restartBtn = document.getElementById("restart-btn");
let play = true;
let startTimer;


function getTime(){
  return `${hr.innerText}:${min.innerText}:${sec.innerText}`
}
function startStopTimer() {
  if (play) {
    playPauseBtn.firstElementChild.classList.remove("fa-play");
    playPauseBtn.firstElementChild.classList.add("fa-pause");
    startTimer = setInterval(() => {
      if (Number(sec.innerText) < 9) {
        sec.innerText++;
        sec.innerText = "0" + sec.innerText;
      } else {
        sec.innerText++;
      }
      if (sec.innerText === "60") {
        sec.innerText = "00";
        if (Number(min.innerText) < 9) {
          min.innerText++;
          min.innerText = "0" + min.innerText;
        } else {
          min.innerText++;
        }
      }
      if (min.innerText === "60") {
        min.innerText = "00";
        if (Number(hr.innerText) < 9) {
          hr.innerText++;
          min.innerText = "0" + hr.innerText;
        } else {
          hr.innerText++;
        }
        hr.innerText++;
      }
    }, 1000);
    play = false;
  } else {
    clearInterval(startTimer);
    playPauseBtn.firstElementChild.classList.add("fa-play");
    playPauseBtn.firstElementChild.classList.remove("fa-pause");
    play = true;
  }
}

function restartTimer() {
  hr.innerText = min.innerText = sec.innerText = "00";
  if (play === false) {
    startStopTimer();
  }
  lapsBox.innerHTML = ""
}

function createLap(){
  if(getTime()!=="00:00:00"){

    let totalLaps = document.querySelectorAll(".lap-row").length
    let lap = document.createElement("div")
    lap.className = "lap-row"
    lap.innerHTML = `<span class="lap-num">${totalLaps+1}.</span> ${hr.innerText}:${min.innerText}:${sec.innerText}`
    lapsBox.appendChild(lap)
  }
  else{
    lapsBox.innerText = "Please start the timer first."
    setTimeout(()=>{
      lapsBox.innerText = ""
    },2000)
  }
}
playPauseBtn.addEventListener("click", startStopTimer);
restartBtn.addEventListener("click", restartTimer);
stopBtn.addEventListener("click",createLap)