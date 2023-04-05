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

  const removeBox = document.createElement("img");
  removeBox.src = "cross.png";
  removeBox.addEventListener("click", () => {
    listElement.removeChild(todoList);
  })

  checkBox.addEventListener("click", () => {
    checkBox.checked = true;
    todoParagraph.style.fontWeight = "normal";
    todoParagraph.style.textDecoration = "line-through";
  });

  todoList.appendChild(checkBox);
  todoList.appendChild(todoParagraph);
  todoList.appendChild(removeBox);
  listElement.appendChild(todoList);

  inputFieldElement.value = "";
});
