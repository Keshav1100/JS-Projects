//   const scriptURL = 'https://script.google.com/macros/s/AKfycbwhi1uYTVniAA1tH40KXEKiG1i7Lun_G4mR6i6ljgznsloBgp0HmEl89fO8l3EB4C7y/exec'
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
