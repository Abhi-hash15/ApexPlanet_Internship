function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  // Create text span
  const span = document.createElement("span");
  span.textContent = task;

  // Create task-left div
  const taskLeft = document.createElement("div");
  taskLeft.className = "task-left";
  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);

  // Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append all to li
  li.appendChild(taskLeft);
  li.appendChild(removeBtn);

  // Append li to list
  document.getElementById("todoList").appendChild(li);

  // Clear input
  input.value = "";
}

function clearCompleted() {
  const list = document.getElementById("todoList");
  const completedTasks = list.querySelectorAll("li.completed");
  completedTasks.forEach(task => task.remove());
}
