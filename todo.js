const inputFieldElement = document.getElementById("inputField");
const addButtonElement = document.getElementById("addButton");
const listElement = document.getElementById("list");

let todoArray = [];

collectLocalStorage();

addButtonElement.addEventListener("click", () => {
  createNewAssignment();
  renderList();
  inputFieldElement.value = "";
});

//pushing the assingment into the array
function createNewAssignment() {
  assignment = inputFieldElement.value;
  todoArray.push(assignment);
  saveToLocalStorage();
}

//--------------------------------------------

function showAllAssignments(todo) {
  const todoList = document.createElement("li");
  const todoParagraph = document.createElement("p");

  todoParagraph.innerText = todo;

  //--------------------------------------------

  //making the checkbox and chaning look when checked = true
  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;
    todoParagraph.style.fontWeight = "normal";
    todoParagraph.style.textDecoration = "line-through";
  });

  //--------------------------------------------

  //making the remove button and clearing local stroadge when clicked
  const removeBox = document.createElement("img");
  removeBox.src = "cross.png";

  removeBox.addEventListener("click", () => {
    clearLocalStorage(todo);
    renderList();
  });

  //--------------------------------------------

  todoList.appendChild(checkBox);
  todoList.appendChild(todoParagraph);
  todoList.appendChild(removeBox);
  listElement.appendChild(todoList);
}

//--------------------------------------------

// turn the objects into string so it can be saved  local storage
function saveToLocalStorage() {
  let todoArrayStringified = JSON.stringify(todoArray);
  localStorage.setItem("assigmentsKey", todoArrayStringified);
}

// turn string back to array with parse
function collectLocalStorage() {
  todoArrayStringified = localStorage.getItem("assigmentsKey");

  if (todoArrayStringified != null) {
    let todoArrayParsed = JSON.parse(todoArrayStringified);
    todoArray = todoArrayParsed;
    renderList();
  }
}

// remove one object in array with splice
function clearLocalStorage(todo) {
  let index = todoArray.findIndex((todoTask) => todoTask === todo);
  if (index > -1) {
    todoArray.splice(index, 1);
  }
  saveToLocalStorage();
}

//--------------------------------------------

// going through all list parts
function renderList() {
  listElement.textContent = "";
  todoArray.forEach((todo) => {
    showAllAssignments(todo);
  });
}
