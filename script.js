const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-list");

const addTask = function () {
  const inputText = inputBox.value;
  if (inputText !== "") {
    let newLi = document.createElement("li");
    newLi.textContent = inputText;
    newLi.addEventListener("click", function () {
      newLi.classList.toggle("checked");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function () {
      listContainer.removeChild(newLi);
    });
    newLi.appendChild(deleteBtn);
    listContainer.appendChild(newLi);
  } else {
    alert("!Write Something!");
  }
  inputBox.value = "";
};
