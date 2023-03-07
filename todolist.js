function addTodo(list, taskText) {
  let li = document.createElement("li")
  // let completedCheckbox = document.createElement("input")
  let task = document.createElement("span")

  // completedCheckbox.type = "checkbox";
  task.innerText = taskText;
  li.appendChild(task);
  // li.appendChild(completedCheckbox);
  list.appendChild(li)
}

function addToDo() {
  let taskText = document.getElementById('add-task').value;
  let list = document.getElementById('todo-list');
  
  if(taskText.length !== 0)
    addTodo(list, taskText);

  document.getElementById('add-task').value = ''
}

function removeRow(e) {
  console.log(e.target.tagName)
  let li = e.target.parentElement;
  let list = li.parentElement;

  if(e.target.tagName === "SPAN") {
    li.style.textDecoration = "line-through"
    setTimeout(() => list.removeChild(li), 1000)
  }
}

function markAsComplete() {

}

let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addToDo);
let list = document.getElementById('todo-list');
list.addEventListener("click", removeRow)