const inputFieldElement = document.getElementById("inputField");
const addButtonElement = document.getElementById("addButton");
const listElement = document.getElementById("list");

let assignment;

addButtonElement.addEventListener("click", () => {
  assignment = inputFieldElement.value;
  listElement.innerText = assignment;
});
