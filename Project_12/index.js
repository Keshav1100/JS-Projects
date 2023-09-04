const btns = document.querySelectorAll("button");
const calcInput = document.getElementById("calc-input");
const opBtns = document.querySelectorAll(".op-btn");
const mathOpBtns = document.querySelectorAll(".math-op");
const equalBtn = document.getElementById("equal-btn");
const clearBtn = document.getElementById("clear-btn");

// Function to update input box value on every click
function inputUpdate(e) {
  if (Number.parseInt(e.target.innerText) || e.target.innerText === "0") {
    calcInput.value += e.target.innerText;
    inputPrevCheck();
  } else if (
    e.target.innerText === "+" ||
    e.target.innerText === "-" ||
    e.target.innerText === "*" ||
    e.target.innerText === "/"
  ) {
    if (e.target.disable !== "true") {
      calcInput.value += e.target.innerText;
      inputPrevCheck();
    }
  }
}

// Function to operate equals to button handling
function equalClick() {
  let inputStateNums = calcInput.value.split(/[\+\-\*\/]/).filter((num) => {
    if (num !== "") {
      return num;
    }
  });
  let inputStateOps = calcInput.value.match(/[+\-*/]/g);
  if (inputStateOps && inputStateNums) {
    if (inputStateOps.length < inputStateNums.length) {
      if (
        inputStateOps.length === 0 ||
        inputStateOps.length === inputStateNums.length
      ) {
      } else {
        calcInput.value = eval(calcInput.value);
      }
    }
  }
}

// Function to operate C button handling
function clearClick() {
  calcInput.value = "";
}

// Function to handle edge cases where errors can arise
function inputPrevCheck() {
  let lastIndexValue = calcInput.value[calcInput.value.length - 1];
  if (
    lastIndexValue === "+" ||
    lastIndexValue === "-" ||
    lastIndexValue === "*" ||
    lastIndexValue === "/" ||
    lastIndexValue === undefined
  ) {
    mathOpBtns.forEach((mathOpBtn) => {
      mathOpBtn.disable = "true";
      mathOpBtn.classList.add("disable-btn");
    });
  } else {
    mathOpBtns.forEach((mathOpBtn) => {
      mathOpBtn.disable = "false";
      mathOpBtn.classList.remove("disable-btn");
      equalBtn.disable = "false";
      equalBtn.classList.remove("disable-btn");
    });
  }
}

// Disabling = button initially to check irrelevant = clicks
equalBtn.disable = "true";
equalBtn.classList.add("disable-btn");

// Adding event listeners to = and C buttons
equalBtn.addEventListener("click", equalClick);
clearBtn.addEventListener("click", clearClick);

// Adding event listeners buttons to update input values
btns.forEach((btn) => {
  btn.addEventListener("click", inputUpdate);
});

// Calling this function initially to check irrelevant start entries
inputPrevCheck();
