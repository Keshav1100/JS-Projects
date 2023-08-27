const question = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");
const answerOptions = document.querySelector(".answer-options");
// nextBtn.disabled = true
const questionSet = [
  {
    question:
      "What is the significance of the Lunar Orbit Insertion (LOI) in Chandrayaan-3's mission?",
    options: [
      {
        text: "It activates the spacecraft's liquid engine.",
        correct: "false",
      },
      {
        text: "It marks the spacecraft's touchdown on the Moon.",
        correct: "false",
      },
      {
        text: "It separates the lander module from the spacecraft.",
        correct: "false",
      },
      {
        text: "It positions the spacecraft into a lunar orbit.",
        correct: "true",
      },
    ],
  },
  {
    question:
      "What is the significance of the Lunar Orbit Insertion (LOI) in Chandrayaan-3's mission?",
    options: [
      {
        text: "It activates the spacecraft's liquid engine.",
        correct: "false",
      },
      {
        text: "It marks the spacecraft's touchdown on the Moon.",
        correct: "false",
      },
      {
        text: "It separates the lander module from the spacecraft.",
        correct: "false",
      },
      {
        text: "It positions the spacecraft into a lunar orbit.",
        correct: "true",
      },
    ],
  },
  {
    question:
      "What is the significance of the Lunar Orbit Insertion (LOI) in Chandrayaan-3's mission?",
    options: [
      {
        text: "It activates the spacecraft's liquid engine.",
        correct: "false",
      },
      {
        text: "It marks the spacecraft's touchdown on the Moon.",
        correct: "false",
      },
      {
        text: "It separates the lander module from the spacecraft.",
        correct: "false",
      },
      {
        text: "It positions the spacecraft into a lunar orbit.",
        correct: "true",
      },
    ],
  },
  {
    question:
      "What is the significance of the Lunar Orbit Insertion (LOI) in Chandrayaan-3's mission?",
    options: [
      {
        text: "It activates the spacecraft's liquid engine.",
        correct: "false",
      },
      {
        text: "It marks the spacecraft's touchdown on the Moon.",
        correct: "false",
      },
      {
        text: "It separates the lander module from the spacecraft.",
        correct: "false",
      },
      {
        text: "It positions the spacecraft into a lunar orbit.",
        correct: "true",
      },
    ],
  },
];

let currentQuesIndex = 0;
let score = 0;

function showQuiz() {
  question.innerHTML = `${currentQuesIndex + 1}. ${
    questionSet[currentQuesIndex].question
  }`;
  questionSet[currentQuesIndex].options.forEach((option, index) => {
    let optionBtn = document.createElement("button");
    optionBtn.classList.add("btn");
    optionBtn.innerText = option["text"];
    if(option["correct"] === "true"){
        optionBtn.dataset.correct = option["correct"]
    }
    answerOptions.append(optionBtn);
    optionBtn.addEventListener("click",optionClick)
  });
}

function optionClick(e) {
//   console.log(e.target.dataset);
  if(e.target.dataset["correct"]){
    e.target.classList.add("correct-btn")
  }
  else{
    e.target.classList.add("incorrect-btn")
  }
}

function resetState(){
    answerOptions.innerHTML = ""
    nextBtn.style.display = "none"
}
resetState()