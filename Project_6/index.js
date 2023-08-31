const birthDateInput = document.getElementById("birth-date-input");
const ageCalculateBtn = document.getElementById("age-calculate");
const result = document.querySelector(".result");

function ageCalculate(e) {
  if (birthDateInput.value !== "") {
    console.log(birthDateInput.value);
    let ageInput = new Date(birthDateInput.value);
    console.log(ageInput);
    let presentDate = new Date();
    let outputDate = new Date(presentDate - ageInput);

    result.innerHTML = `You are <span>  ${
      outputDate.getUTCFullYear() - 1970
    }</span> years, <span>  ${
      outputDate.getUTCMonth()
    }</span> months and <span>  ${
      outputDate.getUTCDate() - 1
    }</span> days old.`;
  }
}

function getDaysInMonth(year, month) {
  return new Date(year, month - 1, 0).getDate();
}
birthDateInput.max = new Date().toISOString().split("T")[0];
ageCalculateBtn.addEventListener("click", ageCalculate);
