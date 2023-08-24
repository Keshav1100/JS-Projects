const toDo = document.getElementById("to-do");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.querySelector(".task-container ul");

// Function to change the image on click
function taskClickChanges() {
  let taskValues = document.querySelectorAll(".task");
  taskValues.forEach((taskValue) => {
    if (taskValue.className.includes("done")) {
      let imageToChange = taskValue.previousElementSibling.firstElementChild;
      imageToChange.setAttribute("src", "./images/check-mark.png");
    } else {
      let imageToChange = taskValue.previousElementSibling.firstElementChild;
      imageToChange.setAttribute("src", "./images/radio.png");
    }
  });
}

function addClickFunctionality() {
  let taskValues = document.querySelectorAll(".task");
  taskValues.forEach((task) => {
    task.addEventListener("click", (e) => {
      if(e.currentTarget.className.includes("done")){
        e.currentTarget.classList.remove("done")
      }
      else{
        e.currentTarget.classList.add("done");
        console.log(e.currentTarget);
      }
      taskClickChanges();
    });
  });
  let taskDelete = document.querySelectorAll(".task-delete");
  taskDelete.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      // console.log(e.currentTarget.parentElement)
      // e.target.parentElement.previousElementSibling.remove()
      e.currentTarget.parentElement.remove();
    });
  });
}
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
  // addFunctionality();
}

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let item = createTaskItem(toDo.value);
  addTask(item);
  toDo.value = "";
  addClickFunctionality();
});
