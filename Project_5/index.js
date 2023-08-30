const createNoteBtn = document.querySelector(".create-note-btn");
const inputNotesContainer = document.querySelector(".input-notes-container");

function updateNotes() {
  localStorage.setItem("notes", inputNotesContainer.innerHTML);
}

function showNotes() {
  if (localStorage.getItem("notes")) {
    inputNotesContainer.innerHTML = localStorage.getItem("notes");
  }
}

function createNote() {
  let note = document.createElement("p");
  note.className = "note-input";
  note.setAttribute("contenteditable", "true");
  let deleteIcon = document.createElement("img");
  deleteIcon.src = "./images/delete.png";
  deleteIcon.alt = "delete-icon";
  deleteIcon.className = "delete-icon";
  note.addEventListener("click", deleteNote);
  note.appendChild(deleteIcon);
  inputNotesContainer.append(note);
  note.addEventListener("blur", updateNotes);
}
function deleteNote(e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.tagName);
    e.target.parentElement.remove();
  } else if (e.target.tagName === "P") {
    console.log(e.target.tagName);
    let notes = document.querySelectorAll(".note-input");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateNotes();
      };
    });
  }
}
createNoteBtn.addEventListener("click", createNote);
showNotes();
