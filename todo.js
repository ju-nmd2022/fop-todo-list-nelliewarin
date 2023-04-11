const inputFieldElement = document.getElementById("inputField");
const addButtonElement = document.getElementById("addButton");
const listElement = document.getElementById("list");

let todoArray = [];

collectLocalStorage();

addButtonElement.addEventListener("click", () => {
  createNewAssignment();
  showAllAssignments();
  inputFieldElement.value = "";
});

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

  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;
    todoParagraph.style.fontWeight = "normal";
    todoParagraph.style.textDecoration = "line-through";
  });

  //--------------------------------------------

  const removeBox = document.createElement("img");
  removeBox.src = "cross.png";

  removeBox.addEventListener("click", () => {
    clearLocalStorage(todoParagraph.innerText);
    renderList();
  });

  //--------------------------------------------

  todoList.appendChild(checkBox);
  todoList.appendChild(todoParagraph);
  todoList.appendChild(removeBox);
  listElement.appendChild(todoList);
}

//--------------------------------------------

function saveToLocalStorage() {
  let todoArrayStringified = JSON.stringify(todoArray);
  localStorage.setItem("assigmentsKey", todoArrayStringified);
}

function collectLocalStorage() {
  todoArrayStringified = localStorage.getItem("assigmentsKey");

  if (todoArrayStringified != null) {
    let todoArrayParsed = JSON.parse(todoArrayStringified);
    todoArray = todoArrayParsed;
    renderList();
  }
}

function clearLocalStorage(todo) {
  let index = todoArray.findIndex((todoTask) => todoTask === todo);
  if (index > -1) {
    todoArray.splice(index, 1);
  }
  saveToLocalStorage();
}

//--------------------------------------------

function renderList() {
  listElement.innerHTML = "";
  todoArray.forEach((todo) => {
    showAllAssignments(todo);
  });
}
