function moveDown() {
  const listTasks = document.querySelector('#lista-tarefas');
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && listTasks.lastChild !== selectedTask) {
    listTasks.insertBefore(selectedTask, selectedTask.nextSibling.nextSibling);
  }
}
function moveUp() {
  const listTasks = document.querySelector('#lista-tarefas');
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null && listTasks.firstChild !== selectedTask) {
    listTasks.insertBefore(selectedTask, selectedTask.previousSibling);
  }
}
function remove() {
  const selectedTask = document.querySelector('.selected');
  selectedTask.remove();
}
function salvarTarefas() {
  const listTasks = document.querySelector('#lista-tarefas');
  localStorage.setItem('list', `${listTasks.innerHTML}`);
}
function removeCompleted() {
  const listCompletedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < listCompletedTasks.length; index += 1) {
    listCompletedTasks[index].remove();
  }
}
function clear() {
  const listTasks = document.querySelector('#lista-tarefas');
  const textTask = document.querySelector('#texto-tarefa');
  listTasks.innerHTML = '';
  textTask.focus();
}
function completeTask(event) {
  event.target.classList.toggle('completed');
}
function selectTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask === null) {
    event.target.classList.add('selected');
  } else if (selectedTask !== event.target) {
    selectedTask.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');
  }
}
function createTask() {
  const textTask = document.querySelector('#texto-tarefa');
  const listTasks = document.querySelector('#lista-tarefas');

  const newTask = document.createElement('li');
  newTask.innerText = textTask.value;
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', completeTask);
  textTask.value = '';
  listTasks.appendChild(newTask);
  textTask.focus();
}
function addTasksEventListeners() {
  const listTasks = document.querySelectorAll('#lista-tarefas li');
  listTasks.forEach((element) => {
    element.addEventListener('click', selectTask);
    element.addEventListener('dblclick', completeTask);
  });
}
window.onload = function () {
  const createTaskButton = document.querySelector('#criar-tarefa');
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  const clearButton = document.querySelector('#apaga-tudo');
  const salvarTarefasButton = document.querySelector('#salvar-tarefas');
  const textTask = document.querySelector('#texto-tarefa');
  const listTasks = document.querySelector('#lista-tarefas');
  const removeSelected = document.querySelector('#remover-selecionado');
  const moveUpButton = document.querySelector('#mover-cima');
  const moveDownButton = document.querySelector('#mover-baixo');

  listTasks.innerHTML = localStorage.list;
  addTasksEventListeners();

  textTask.focus();
  createTaskButton.addEventListener('click', createTask);
  removeCompletedButton.addEventListener('click', removeCompleted);
  clearButton.addEventListener('click', clear);
  salvarTarefasButton.addEventListener('click', salvarTarefas);
  removeSelected.addEventListener('click', remove);
  moveUpButton.addEventListener('click', moveUp);
  moveDownButton.addEventListener('click', moveDown);
};
