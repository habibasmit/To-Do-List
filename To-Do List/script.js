let addTask = document.querySelector("#addTask");
let showTask = document.querySelector(".show_task");

function addingTaskInTaskBox() {
  let taskVal = document.querySelector("#taskVal").value;

  if (taskVal.trim() !== "") {
    let div = document.createElement("div");
    div.classList.add("addedTask");

    let taskText = document.createElement("span");
    taskText.innerText = taskVal;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
      div.remove();
      if (showTask.children.length === 0) {
        showTask.style.display = "none";
      }
    });

    div.appendChild(taskText);
    div.appendChild(deleteBtn);
    showTask.appendChild(div);
    showTask.style.display = "flex";
  }

  document.querySelector("#taskVal").value = "";
}

addTask.addEventListener("click", addingTaskInTaskBox);