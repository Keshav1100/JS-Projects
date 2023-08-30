const pwdInput = document.getElementById("pwd");
const genPwdBtn = document.getElementById("gen-pwd");
const copyPwdBtn = document.getElementById("copy-pwd");
const copyTick = document.getElementById("copy-tick");
const minusSizeBtn = document.getElementById("minus-size");
const plusSizeBtn = document.getElementById("plus-size");
const pwdSizeValue = document.getElementById("pwd-size-value");

// Adding functionality for focus outline on display password box
pwdInput.addEventListener("blur", (e) => {
  e.currentTarget.parentElement.classList.remove("focus-outline");
});
pwdInput.addEventListener("focus", (e) => {
  e.currentTarget.parentElement.classList.add("focus-outline");
});

// To generate one random character
function genOneChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

// To generate random password
function genPwd(size) {
  let smallAlpha = "abcdefghijklmnopqrstuvwxyz";
  let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let spChar = "!@#$%^&*()";
  let nums = "1234567890";
  let mixChars = smallAlpha + bigAlpha + spChar + nums;
  let initials =
    genOneChar(smallAlpha) +
    genOneChar(bigAlpha) +
    genOneChar(spChar) +
    genOneChar(nums);
  let restPwd = "";
  for (let i = 0; i < size - 4; i++) {
    restPwd += genOneChar(mixChars);
  }
  return initials + restPwd;
}

// Adding generate Password event listener
genPwdBtn.addEventListener("click", () => {
  pwdInput.value = genPwd(Number(pwdSizeValue.innerText));
});

// Adding Copying functionality
copyPwdBtn.addEventListener("click", () => {
  if (pwdInput.value !== "") {
    navigator.clipboard.writeText(pwdInput.value).then(
      () => {
        copyTick.classList.remove("hidden");
        setTimeout(() => {
          copyTick.classList.add("hidden");
          pwdInput.value = "";
        }, 2000);
      },
      () => {}
    );
  }
});

// Adding increase and decrease pwd size functionality
minusSizeBtn.addEventListener("click", (e) => {
  if (Number(pwdSizeValue.innerText) > 8) {
    pwdSizeValue.innerText = Number(pwdSizeValue.innerText) - 1;
  }
});
plusSizeBtn.addEventListener("click", (e) => {
  if (Number(pwdSizeValue.innerText) < 20) {
    pwdSizeValue.innerText = Number(pwdSizeValue.innerText) + 1;
  }
});
