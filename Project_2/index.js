const toDo = document.getElementById("to-do");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.querySelector(".task-container ul");

function checkImg() {
  let tasks = document.querySelectorAll(".task-item");
  for (let task of tasks) {
    // console.log(task.firstElementChild.firstChild)
    console.log(tasks);
    console.log(task.childNodes[3].classList);
    task.childNodes[3].classList.forEach((clname) => {
      console.log(clname)
      if (clname === "done") {
        task.firstElementChild.firstChild.setAttribute(
          "src",
          "./images/check-mark.png"
        );
      } else {
        task.firstElementChild.firstChild.setAttribute(
          "src",
          "./images/radio.png"
        );
      }
    });
  }
}

function addFunctionality() {
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.addEventListener("click", (e) => {
      e.target.classList.toggle("done");
      checkImg();
    });
  });
}
// toDo.addEventListener("focus",()=>{

//     if (document.activeElement === toDo) {
//       document.querySelector(".input-row form").classList.toggle("form-outline");
//     }
// })

function createTaskItem(value) {
  const item = document.createElement("li");
  item.className = "task-item";
  item.innerHTML = `<span class="task-status"
    ><img src="./images/radio.png" alt="task-status"
  /></span>
  <span class="task">${value}</span>
  <span class="task-delete"
    ><img src="./images/close.png" alt="delete-task"
  /></span>`;
  return item;
}

function addTask(task) {
  taskList.append(task);
  addFunctionality();
}

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let item = createTaskItem(toDo.value);
  addTask(item);
  toDo.value = "";
});
