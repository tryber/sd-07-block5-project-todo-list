const btnCreateTask = document.getElementById('criar-tarefa');
const btnSaveList = document.getElementById('salvar-tarefas');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemoveCompletedTasks = document.getElementById('remover-finalizados');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const taskTextInput = document.getElementById('texto-tarefa');

function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = taskTextInput.value;
  newTask.className = 'task-item';
  taskList.appendChild(newTask);
  taskTextInput.value = '';
}

function listIsTrue() {
  return !!document.getElementsByClassName('task-item')[0];
}

function taskItemsList() {
  return document.getElementsByClassName('task-item');
}

function saveList() {
  const taskList = document.getElementById('lista-tarefas');
  if (listIsTrue()) {
    localStorage.setItem('listItems', taskList.innerHTML);
  } else {
    alert('Lista vazia!');
  }
}

function getList() {
  const taskList = document.getElementById('lista-tarefas');
  if (localStorage.length > 0) {
    const listItems = localStorage.getItem('listItems');
    taskList.innerHTML = listItems;
  }
}

function clearList() {
  const taskList = document.getElementById('lista-tarefas');
  if (listIsTrue()) {
    localStorage.clear();
    taskList.innerHTML = '';
  }
}

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  if (listIsTrue()) {
    for (let task = 0; task <= completedTasks.length - 1; task += 1) {
      completedTasks[task].remove();
    }
  }
}

function removeSelected() {
  const selectedTask = document.querySelector('.selected');
  selectedTask.remove();
}

function moveUp(previous, selected) {
  const next = previous.innerHTML;
  previous.innerHTML = selected.innerHTML;
  selected.innerHTML = next;
  const nextClass = previous.className;
  previous.className = selected.className;
  selected.className = nextClass;
}
function moveDown(next, selected) {
  const previous = next.innerHTML;
  next.innerHTML = selected.innerHTML;
  selected.innerHTML = previous;
  const previousClass = next.className;
  next.className = selected.className;
  selected.className = previousClass;
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-item')) {
    for (
      let taskItem = 0;
      taskItem <= taskItemsList().length - 1;
      taskItem += 1
    ) {
      taskItemsList()[taskItem].style = '';
      taskItemsList()[taskItem].classList.remove('selected');
    }
    event.target.className += ' selected';
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task-item')) {
    event.target.classList.toggle('completed');
  }
});

btnCreateTask.addEventListener('click', createTask);
taskTextInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    btnCreateTask.click();
  }
});

btnMoveUp.addEventListener('click', function () {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask != null) {
    const previous = selectedTask.previousElementSibling;
    if (previous != null) {
      moveUp(previous, selectedTask);
    }
  }
  return false;
});
btnMoveDown.addEventListener('click', function () {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask != null) {
    const next = selectedTask.nextElementSibling;
    if (next != null) {
      moveDown(next, selectedTask);
    }
  }
  return false;
});

btnClearList.addEventListener('click', clearList);
btnSaveList.addEventListener('click', saveList);
btnRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
btnRemoveSelected.addEventListener('click', removeSelected);
getList();
