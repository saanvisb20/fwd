const addbtn = document.getElementById("addbtn");
document.getElementById("addbtn").addEventListener("click", addtask);

function addtask() {
  let taskText = document.getElementById("taskinput").value;

  if (taskText === "") return;

  let li = document.createElement("li");

  // Create checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create span for text
  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Toggle completed class
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskSpan.classList.add("completed");
    } else {
      taskSpan.classList.remove("completed");
    }
  });

  // Add elements to li
  li.appendChild(checkbox);
  li.appendChild(taskSpan);

  // Add li to ul
  document.getElementById("taskList").appendChild(li);

  // Clear input
  document.getElementById("taskinput").value = "";
}