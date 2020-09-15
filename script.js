const inputTextTask = document.getElementById('texto-tarefa');

const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonClearTaskList = document.getElementById('apaga-tudo');
const buttonRemoveCompletedTasks = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonLoadTasks = document.getElementById('carregar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');

const orderedListTasks = document.getElementById('lista-tarefas');
let selectedTask = document.getElementsByClassName('selected');
let completedTasks = document.querySelectorAll('.completed');

function selectOtherLi() {  //  Luiz F. Mariz Advice
  if (selectedTask[0] !== undefined) {
    selectedTask[0].classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

function markAsDoneLi() {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function elementCreator() {
  const element = document.createElement('li');
  element.innerText = inputTextTask.value;
  element.className = 'task';
  inputTextTask.value = '';
  element.addEventListener('click', selectOtherLi);
  element.addEventListener('dblclick', markAsDoneLi);
  return element;
}

function addTaskToList() {
  const elementLi = elementCreator();
  orderedListTasks.appendChild(elementLi);
}

function clearTaskList() {
  orderedListTasks.innerHTML = '';
}

function removeCompletedTasks() {
  completedTasks = document.getElementsByClassName('completed');
  const numberMax = completedTasks.length;
  for (let index = 0; index < numberMax; index += 1) {
    completedTasks[0].parentElement.removeChild(completedTasks[0]);
  }
}

function removeSelectedTask() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] !== undefined) {
    orderedListTasks.removeChild(selectedTask[0]);
  }
}

function saveOrderedList() {
  const toString = JSON.stringify(orderedListTasks.innerHTML);
  localStorage.setItem('keyListTask', toString);
}

function loadOrderedList() {
  const toHtml = JSON.parse(localStorage.getItem('keyListTask'));
  orderedListTasks.innerHTML = toHtml;
  const tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', selectOtherLi);
    tasks[index].addEventListener('dblclick', markAsDoneLi);
  }
}

function moveTaskUp() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask.length !== 0) {
    if (selectedTask[0].previousElementSibling != null) {
      orderedListTasks.insertBefore(selectedTask[0], selectedTask[0].previousElementSibling);
      selectedTask = document.getElementsByClassName('selected');
    }
  }
}

function moveTaskDown() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask.length !== 0) {
    if (selectedTask[0].nextElementSibling != null) {  // Fernando Soares advice.
      orderedListTasks.insertBefore(selectedTask[0].nextElementSibling, selectedTask[0]);
      selectedTask = document.getElementsByClassName('selected');
    }
  }
}

buttonCreateTask.addEventListener('click', addTaskToList);
buttonClearTaskList.addEventListener('click', clearTaskList);
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
buttonRemoveSelected.addEventListener('click', removeSelectedTask);
buttonSaveTasks.addEventListener('click', saveOrderedList);
buttonLoadTasks.addEventListener('click', loadOrderedList);
buttonMoveUp.addEventListener('click', moveTaskUp);
buttonMoveDown.addEventListener('click', moveTaskDown);

if (localStorage.length !== 0) {
  window.onload = loadOrderedList;
}
