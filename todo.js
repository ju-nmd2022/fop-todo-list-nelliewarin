const inputFieldElement = document.getElementById("inputField");
const addButtonElement = document.getElementById("addButton");
const listElement = document.getElementById("list");

let assignment;
let todoArray = [];

addButtonElement.addEventListener("click", () => {
  assignment = inputFieldElement.value;
  todoArray.push(assignment);

  const todoList = document.createElement("li");
  const todoParagraph = document.createElement("p");

  todoParagraph.innerText = assignment;

  const checkBox = document.createElement("input");
  checkBox.type = "radio";
  checkBox.checked = false;

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;
    todoParagraph.style.fontWeight = "normal";
  });

  todoList.appendChild(checkBox);
  todoList.appendChild(todoParagraph);
  listElement.appendChild(todoList);

  inputFieldElement.value = "";
});
