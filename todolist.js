function addRow(table, taskText, categText) {
  let row = document.createElement("tr")
  let completed = document.createElement("td")
  let completedCheckbox = document.createElement("input")
  let task = document.createElement("td")
  let category = document.createElement("td")

  completedCheckbox.type = "checkbox";
  task.innerText = taskText;
  category.innerText = categText;
  completed.appendChild(completedCheckbox);
  row.appendChild(completed);
  row.appendChild(task);
  row.appendChild(category);
  table.appendChild(row)
}

function addToDo() {
  let taskText = document.getElementById('add-task').value;
  let categText = document.getElementById('add-category').value;
  let table = document.getElementById('todo-table');
  
  if(categText.length !== 0 && taskText.length !== 0)
    addRow(table, taskText, categText);

  document.getElementById('add-task').value = ''
  document.getElementById('add-category').value = '';
}

function removeRow(e) {
  console.log(e.target.parentElement.id);
  let rowParent = e.target.parentElement;
  let toDos = rowParent.parentElement;

  if(rowParent.tagName === "TR" && rowParent.id !== 'labels' && rowParent.id !== 'inputs') {
    if(neverDeleted) {
      if(confirm('Double clicking a row deletes.\nProceed?')) {
        neverDeleted = false;
        toDos.removeChild(rowParent);
      }
      return;
    }
    toDos.removeChild(rowParent);
  }
}

function markAsComplete() {

}

let neverDeleted = true;

let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addToDo);
let table = document.getElementById('todo-table');
table.addEventListener("dblclick", removeRow)