const makeTaskButton = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');
const removeFinishedButton = document.querySelector('#remover-finalizados');
const removeSelectedButton = document.querySelector('#remover-selecionado');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');

/* eslint no-restricted-syntax: ["error", "FunctionExpression",
 "WithStatement", "BinaryExpression[operator='in']"] */


function setColorBackgroundLi() {
  const classLi = document.querySelector('#lista-tarefas').children;
  for (const li of classLi) {
    if (li.classList.contains('selected')) {
      li.classList.remove('selected');
    }
  }
  // this.classList.add('selected');
  this.className += ' selected';
}

function makeTaskList() {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerText = inputTask.value;
  orderedList.appendChild(li);
  inputTask.value = '';
  li.addEventListener('click', setColorBackgroundLi);

  function setlinethrough() {
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  }
  li.addEventListener('dblclick', setlinethrough);
}

function removeFinished() {
  while (document.querySelector('.completed')) {
    orderedList.removeChild(document.querySelector('.completed'));
  }
}
function removeSelected() {
  while (document.querySelector('.selected')) {
    orderedList.removeChild(document.querySelector('.selected'));
  }
}
function eraseAll() {
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
}
function saveTasks() {
  // localStorage.clear();
  const toSave = document.querySelector('ol');
  localStorage.setItem('toSaveTasks', toSave.innerHTML);
}

function reload() {
  document.querySelector('ol').innerHTML = localStorage.getItem('toSaveTasks');
}
saveTasksButton.addEventListener('click', saveTasks);

  // makeTaskList()
reload();
function moveUp() {
  const toMoveUpLi = document.querySelector('.selected');
  if (toMoveUpLi !== null) {
    const previousToMove = toMoveUpLi.previousElementSibling;
    if (previousToMove !== null) {
      orderedList.insertBefore(toMoveUpLi, toMoveUpLi.previousElementSibling);
      // previousToMove.Before(toMoveUpLi)
    }
  }
}

function moveDown() {
  const toMoveDownLi = document.querySelector('.selected');
  if (toMoveDownLi !== null) {
    const nextToMove = toMoveDownLi.nextElementSibling;
    if (nextToMove !== null) {
      orderedList.insertBefore(toMoveDownLi.nextElementSibling, toMoveDownLi);
    }
  }
}

makeTaskButton.addEventListener('click', makeTaskList);
eraseAllButton.addEventListener('click', eraseAll);
removeFinishedButton.addEventListener('click', removeFinished);
removeSelectedButton.addEventListener('click', removeSelected);
moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
