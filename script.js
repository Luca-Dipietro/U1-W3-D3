const addNewTask = function () {
  const newLi = document.createElement("li");
  const inputValue = document.getElementById("new-task").value;
  const stringInputValue = document.createTextNode(inputValue);
  newLi.appendChild(stringInputValue);
  if (inputValue === "") {
    alert("!Write something!");
  } else {
    document.getElementById("task-list").appendChild(newLi);
    const span = document.createElement("span");
    span.innerHTML = "X";
    newLi.appendChild(span);
  }
  document.getElementById("new-task").value = "";
};

const listContainer = document.getElementById("list-container");
listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "li") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "span") {
      event.target.parentElement.remove();
    }
  },
  false
);
