
const showCase =  [
    {
      image: "./images/project_1.png",
      title: "Weather App",
      liveDemo: "./Project_1/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_1",
    },
    {
      image: "./images/project_2.png",
      title: "To Do App",
      liveDemo: "./Project_2/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_2",
    },
    {
      image: "./images/project_3.png",
      title: "Quiz App",
      liveDemo: "./Project_3/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_3",
    },
    {
      image: "./images/project_4.png",
      title: "Password Generator",
      liveDemo: "./Project_4/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_4",
    },
    {
      image: "./images/project_5.png",
      title: "Notes App",
      liveDemo: "./Project_5/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_5",
    },
    {
      image: "./images/project_6.png",
      title: "Age Calculator",
      liveDemo: "./Project_6/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_6",
    },
    {
      image: "./images/project_7.png",
      title: "Random Quote Generator",
      liveDemo: "./Project_7/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_7",
    },
    {
      image: "./images/project_8.png",
      title: "QR Code Generator",
      liveDemo: "./Project_8/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_8",
    },
    {
      image: "./images/project_9.png",
      title: "Toast Notification Bar",
      liveDemo: "./Project_9/index.html",
      gitHubLink: "https://github.com/Keshav1100/JS-Projects/tree/main/Project_9",
    },
    {
      image: "./images/project_10.png",
      title: "Custom Music Player",
      liveDemo: "./Project_10/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_10",
    },
    {
      image: "./images/project_11.png",
      title: "Stopwatch",
      liveDemo: "./Project_11/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_11",
    },
    {
      image: "./images/project_12.png",
      title: "Calculator",
      liveDemo: "./Project_12/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_12",
    },
    {
      image: "./images/project_13.png",
      title: "Popup Card",
      liveDemo: "./Project_13/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_13",
    },
    {
      image: "./images/project_14.png",
      title: "Hiding Password using JS",
      liveDemo: "./Project_14/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_14",
    },
    {
      image: "./images/project_15.png",
      title: "Dark theme using JS",
      liveDemo: "./Project_15/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_15",
    },
    {
      image: "./images/project_16.png",
      title: "Regex - Form Validation",
      liveDemo: "./Project_16/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_16",
    },
    {
      image: "./images/project_17.png",
      title: "Image Gallery",
      liveDemo: "./Project_17/index.html",
      gitHubLink:
        "https://github.com/Keshav1100/JS-Projects/tree/main/Project_17",
    },
  ];
const projectShowcaseContainer = document.getElementById(
  "project-showcase-container"
);
function generatePojectCard(project) {
  let projectShowcase = document.createElement("div");
  let projectImg = document.createElement("img");
  let projectTitle = document.createElement("h2");
  let projectButtons = document.createElement("div");
  let projectDemoBtn = document.createElement("button");
  let projectGitBtn = document.createElement("button");
  projectShowcase.className = "project-showcase";
  projectDemoBtn.className = "btn";
  projectGitBtn.className = "btn";
  projectButtons.className = "buttons";
  projectImg.src = project.image;
  projectImg.alt = project.title;
  projectTitle.innerText = project.title;
  projectDemoBtn.innerHTML = `<a target="_blank" href=${project.liveDemo}>Live Demo</a>`;
  projectGitBtn.innerHTML = `<a target="_blank" href=${project.gitHubLink}>Github</a>`;
  projectButtons.appendChild(projectDemoBtn);
  projectButtons.appendChild(projectGitBtn);
  projectShowcase.appendChild(projectImg);
  projectShowcase.appendChild(projectTitle);
  projectShowcase.appendChild(projectButtons);
  projectShowcaseContainer.appendChild(projectShowcase);
}
showCase.map((project)=>{generatePojectCard(project)});
