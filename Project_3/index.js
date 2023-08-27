const question = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");
const answerOptions = document.querySelector(".answer-options");

const questionSet = [
  {
    question:
      "Which planet is often referred to as the 'Evening Star' or the 'Morning Star'?",
    options: [
      {
        text: "Mars",
        correct: "false",
      },
      {
        text: "Venus",
        correct: "true",
      },
      {
        text: "Mercury",
        correct: "false",
      },
      {
        text: "Neptune",
        correct: "false",
      },
    ],
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      {
        text: "Oxygen",
        correct: "false",
      },
      {
        text: "Nitrogen",
        correct: "true",
      },
      {
        text: "Carbon dioxide",
        correct: "false",
      },
      {
        text: "Helium",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: [
      {
        text: "Earth",
        correct: "false",
      },
      {
        text: "Jupiter",
        correct: "true",
      },
      {
        text: "Saturn",
        correct: "false",
      },
      {
        text: "Mars",
        correct: "false",
      },
    ],
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      {
        text: "Isaac Newton",
        correct: "false",
      },
      {
        text: "Marie Curie",
        correct: "false",
      },
      {
        text: "Albert Einstein",
        correct: "true",
      },
      {
        text: "Galileo Galilei",
        correct: "false",
      },
    ],
  },
  {
    question: "What event marked the beginning of World War II?",
    options: [
      {
        text: "The bombing of Hiroshima and Nagasaki",
        correct: "false",
      },
      {
        text: "The signing of the Treaty of Versailles",
        correct: "false",
      },
      {
        text: "The invasion of Poland by Germany",
        correct: "true",
      },
      {
        text: "The Russian Revolution",
        correct: "false",
      },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      {
        text: "Venus",
        correct: "false",
      },
      {
        text: "Mars",
        correct: "true",
      },
      {
        text: "Jupiter",
        correct: "false",
      },
      {
        text: "Uranus",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the currency of Japan?",
    options: [
      {
        text: "Yen",
        correct: "true",
      },
      {
        text: "Dollar",
        correct: "false",
      },
      {
        text: "Euro",
        correct: "false",
      },
      {
        text: "Pound",
        correct: "false",
      },
    ],
  },
  {
    question: "Which famous artist painted the Mona Lisa?",
    options: [
      {
        text: "Pablo Picasso",
        correct: "false",
      },
      {
        text: "Vincent van Gogh",
        correct: "false",
      },
      {
        text: "Leonardo da Vinci",
        correct: "true",
      },
      {
        text: "Michelangelo",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the largest mammal on Earth?",
    options: [
      {
        text: "African Elephant",
        correct: "false",
      },
      {
        text: "Blue Whale",
        correct: "true",
      },
      {
        text: "Giraffe",
        correct: "false",
      },
      {
        text: "Hippopotamus",
        correct: "false",
      },
    ],
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: [
      {
        text: "China",
        correct: "false",
      },
      {
        text: "South Korea",
        correct: "false",
      },
      {
        text: "Japan",
        correct: "true",
      },
      {
        text: "Vietnam",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: [
      {
        text: "Ag",
        correct: "false",
      },
      {
        text: "Au",
        correct: "true",
      },
      {
        text: "Fe",
        correct: "false",
      },
      {
        text: "Cu",
        correct: "false",
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
  resetState();
  if (currentQuesIndex >= questionSet.length) {
    answerOptions.innerHTML = "ellojbjh";
    answerOptions.innerHTML = "";
    question.innerText = `You scored ${score} out of ${questionSet.length}`;
    nextBtn.style.display = "block";
    nextBtn.innerText = "Play again";
    score = 0;
    currentQuesIndex = 0;
  } else {
    question.innerHTML = `${currentQuesIndex + 1}. ${
      questionSet[currentQuesIndex].question
    }`;
    questionSet[currentQuesIndex].options.forEach((option) => {
      let optionBtn = document.createElement("button");
      optionBtn.classList.add("btn");
      optionBtn.innerText = option["text"];
      if (option["correct"] === "true") {
        optionBtn.dataset.correct = option["correct"];
      }
      answerOptions.append(optionBtn);
      optionBtn.addEventListener("click", optionClick);
    });
  }
}

function optionClick(e) {
  if (e.target.dataset["correct"]) {
    e.target.classList.add("correct-btn");
    score++;
  } else {
    e.target.classList.add("incorrect-btn");
  }
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.style.cursor = "no-drop";
    btn.disabled = true;
    if (btn.dataset["correct"]) {
      if (!btn.classList.contains("correct-btn")) {
        btn.classList.add("correct-btn");
      }
    }
  });
  currentQuesIndex++;
  nextBtn.style.display = "block";
  console.log(score);
  console.log(currentQuesIndex);
}

function resetState() {
  answerOptions.innerHTML = "";
  nextBtn.style.display = "none";
}
resetState();
showQuiz();
nextBtn.addEventListener("click", showQuiz);
