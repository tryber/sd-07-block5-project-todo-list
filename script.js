// Select item with click
function selectItem(event) {
  const previousSelectedTask = document.querySelector('.selected');
  // check if any items are selected

  if (previousSelectedTask !== null) {
    previousSelectedTask.className = previousSelectedTask.className.replace('selected', '');
  }

  if (event.target.className.includes('completed')) {
    event.target.className = 'selected completed';
  } else {
    event.target.className = 'selected';
  }
}

// Mark task completed
function taskCompleted(event) {
  if (event.target.className.includes('completed')) {
    event.target.className = event.target.className.replace(' completed', '');
  } else {
    event.target.className += ' completed';
  }
}

// Create List
function createList(itemValue, classNam = '') {
  const taskItem = document.createElement('li');
  taskItem.addEventListener('click', selectItem);
  taskItem.addEventListener('dblclick', taskCompleted);
  taskItem.innerText = itemValue;
  taskItem.className = classNam;
  return taskItem;
}

// Add task event
const addTask = document.querySelector('#criar-tarefa'); // Button add task
const tasks = document.querySelector('#lista-tarefas');

addTask.addEventListener('click', function () {
  // List of all tasks to do
  const taskToDo = document.querySelector('#texto-tarefa'); // Input with the new task
  tasks.appendChild(createList(taskToDo.value));
  taskToDo.value = '';
});

// Clear list
const clearAll = document.querySelector('#apaga-tudo');

clearAll.addEventListener('click', function () {
  document.querySelector('#lista-tarefas').innerHTML = '';
});

// Clear all completed tasks
const clearAllCompleted = document.querySelector('#remover-finalizados');
clearAllCompleted.addEventListener('click', function () {
  const tasksCompleteds = document.querySelectorAll('#lista-tarefas .completed');
  for (let index = 0; index < tasksCompleteds.length; index += 1) {
    tasksCompleteds[index].remove();
  }
});

// Save tasks
const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', function () {
  localStorage.clear();
  const tasksToSave = document.querySelectorAll('#lista-tarefas li');
  for (let item = 0; item < tasksToSave.length; item += 1) {
    localStorage.setItem(`Item-${item}`,
      [tasksToSave[item].innerText, tasksToSave[item].className]);
  }
});

// Load all tasks save
window.onload = function () {
  for (let getItem = 0; getItem < localStorage.length; getItem += 1) {
    const localStor = localStorage[`Item-${getItem}`].split(',');
    tasks.appendChild(createList(localStor[0], localStor[1]));
  }
};

function actionAtribute(task, action) {
  if (action === 'mover-baixo') {
    return task + 1;
  }
  return task - 1;
}

function moveUpDown(listAllTasks, action) {
  for (let task = 0; task < listAllTasks.length; task += 1) {
    const selected = listAllTasks[task].cloneNode(true);
    if (listAllTasks[task].className.includes('selected')) {
      const indexTask = actionAtribute(task, action);
      const next = listAllTasks[indexTask].cloneNode(true);
      listAllTasks[indexTask].innerText = selected.innerText;
      listAllTasks[indexTask].className = selected.className;
      listAllTasks[task].innerText = next.innerText;
      listAllTasks[task].className = next.className;
      task += 1;
    }
  }
}

function moveItem(event) {
  const action = event.target.id;
  const listAllTasks = document.querySelector('#lista-tarefas').children;
  const lastchild = document.querySelector('#lista-tarefas').lastElementChild.className;
  const firstChild = document.querySelector('#lista-tarefas').firstElementChild.className;
  if ((lastchild.includes('selected') && action === 'mover-baixo') || (firstChild.includes('selected') && action === 'mover-cima')) {
    alert('Ação inválida');
  } else {
    moveUpDown(listAllTasks, action);
  }
}

const buttonUp = document.querySelector('#mover-cima');
buttonUp.addEventListener('click', moveItem);
const buttonDown = document.querySelector('#mover-baixo');
buttonDown.addEventListener('click', moveItem);

const buttonRemoveSel = document.querySelector('#remover-selecionado');
buttonRemoveSel.addEventListener('click', function () {
  document.querySelector('.selected').remove();
});
