const task = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const taskAdd = document.getElementById('criar-tarefa');
let selectedAllTasks = [];

taskAdd.addEventListener('click', function () {
  const currentTask = document.createElement('li');
  currentTask.className = 'ordered-list';
  currentTask.innerText = task.value;
  list.appendChild(currentTask);
  task.value = '';
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('ordered-list')) {
    selectedAllTasks = document.getElementsByClassName('ordered-list');
    for (let index = 0; index < selectedAllTasks.length; index += 1) {
      selectedAllTasks[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('ordered-list')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

const cleanButton = document.querySelector('#apaga-tudo');

cleanButton.addEventListener('click', function () {
  list.innerHTML = '';
});

const finishedRemove = document.querySelector('#remover-finalizados');

finishedRemove.addEventListener('click', function () {
  const item = document.querySelectorAll('.completed');
  for (let index = 0; index < item.length; index += 1) {
    item[index].remove();
  }
});

const tasksSave = document.querySelector('#salvar-tarefas');

tasksSave.addEventListener('click', function () {
  const tasksArray = [{
    name: '',
    class: '',
  }];
  const newArray = [];
  for (let index = 0; index < list.children.length; index += 1) {
    tasksArray.name = list.children[index].innerText;
    tasksArray.class = list.children[index].className;
    newArray.push(Object.assign({}, tasksArray));
  }
  localStorage.setItem('List_tasks', JSON.stringify(newArray));
});

if (typeof (Storage) !== 'undefined' && localStorage.length !== 0) {
  const oldList = JSON.parse(localStorage.getItem('List_tasks'));
  for (let index = 0; index < oldList.length; index += 1) {
    const itemList = document.createElement('li');
    itemList.className = oldList[index].class;
    itemList.innerText = oldList[index].name;
    list.appendChild(itemList);
  }
}

const selectedRemove = document.getElementById('remover-selecionado');

selectedRemove.addEventListener('click', function () {
  const listRemove = document.querySelectorAll('.ordered-list');
  for (let index = 0; index < listRemove.length; index += 1) {
    if (listRemove[index].classList.contains('selected')) {
      listRemove[index].remove();
    }
  }
});

const up = document.getElementById('mover-cima');

up.addEventListener('click', function () {
  const upItems = document.querySelectorAll('.ordered-list');
  for (let index = 0; index < upItems.length; index += 1) {
    if (upItems[index].classList.contains('selected') && index !== 0) {
      list.insertBefore(upItems[index], upItems[index - 1]);
    }
  }
});

const down = document.getElementById('mover-baixo');

down.addEventListener('click', function () {
  const downItems = document.querySelectorAll('.ordered-list');
  for (let index = 0; index < downItems.length; index += 1) {
    if (downItems[index].classList.contains('selected') && index !== downItems.length - 1) {
      list.insertBefore(downItems[index], downItems[index + 1].nextSibling);
    }
  }
});
