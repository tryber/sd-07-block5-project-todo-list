const input = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonClearList = document.querySelector('#apaga-tudo');
const buttonClearCompletedTaskListItem = document.querySelector('#remover-finalizados');
const buttonItemMoveUp = document.querySelector('#mover-cima');
const buttonItemMoveDown = document.querySelector('#mover-baixo');
const buttonSaveTaskList = document.querySelector('#salvar-tarefas');
const buttonRemoveSelectedItem = document.querySelector('#remover-selecionado');

let taskListItens = document.querySelectorAll('li');
let completedTaskListItens = document.querySelectorAll('.completed');
let selectedItem = document.querySelector('.selected');
let inputValue = '';

function uncheckedTaskListItem(position) {
  taskListItens = document.querySelectorAll('li');
  for (let index = 0; index < taskListItens.length; index += 1) {
    if (taskListItens[index] !== position) {
      taskListItens[index].classList.remove('selected');
    }
  }
}

function checkItem(newTaskListItem) {
  newTaskListItem.addEventListener('dblclick', function () {
    if (newTaskListItem.classList.contains('completed')) {
      newTaskListItem.classList.remove('completed');
    } else {
      newTaskListItem.classList.add('completed');
    }
    completedTaskListItens = document.querySelectorAll('.completed');
  });
}

function selectItem(newTaskListItem) {
  newTaskListItem.addEventListener('click', function (event) {
    newTaskListItem.classList.add('selected');
    const position = event.target;
    uncheckedTaskListItem(position);
  });
}

// https://github.com/tryber/sd-07-block5-project-todo-list/pull/14/files (Thiago Pederzolli) (11 - 18 | 74 - 88);

window.onload = function () {
  const storageLength = localStorage.getItem('storageLength');
  for (let index = 0; index < storageLength; index += 1) {
    const newTaskListItem = document.createElement('li');
    newTaskListItem.innerText = localStorage.getItem(`item${index}`);
    newTaskListItem.className = localStorage.getItem(`itemClass${index}`);
    taskList.appendChild(newTaskListItem);
    selectItem(newTaskListItem);
    checkItem(newTaskListItem);
  }
};

buttonSaveTaskList.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.setItem('storageLength', taskListItens.length);
  for (let index = 0; index < taskListItens.length; index += 1) {
    localStorage.setItem(`item${index}`, taskListItens[index].innerText);
    localStorage.setItem(`itemClass${index}`, taskListItens[index].className);
  }
});

buttonRemoveSelectedItem.addEventListener('click', function (event) {
  event.preventDefault();
  selectedItem = document.querySelector('.selected');
  taskList.removeChild(selectedItem);
});

// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before;

buttonItemMoveUp.addEventListener('click', function (event) {
  event.preventDefault();
  selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    const selectedPreviousItem = selectedItem.previousElementSibling;
    if (selectedPreviousItem !== null) {
      selectedPreviousItem.before(selectedItem);
    }
  }
});

// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after;

buttonItemMoveDown.addEventListener('click', function (event) {
  event.preventDefault();
  selectedItem = document.querySelector('.selected');
  if (selectedItem !== null) {
    const selectedNextItem = selectedItem.nextElementSibling;
    if (selectedNextItem !== null) {
      selectedNextItem.after(selectedItem);
    }
  }
});

buttonClearCompletedTaskListItem.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 0; index < completedTaskListItens.length; index += 1) {
    taskList.removeChild(completedTaskListItens[index]);
  }
});

buttonClearList.addEventListener('click', function (event) {
  event.preventDefault();
  taskList.innerText = '';
});

function createListItem() {
  const newTaskListItem = document.createElement('li');
  newTaskListItem.innerText = inputValue;
  taskList.appendChild(newTaskListItem);
  input.value = '';
  taskListItens = document.querySelectorAll('li');

  selectItem(newTaskListItem);
  checkItem(newTaskListItem);
}

buttonCreateTask.addEventListener('click', function (event) {
  event.preventDefault();
  if (inputValue === '') {
    alert('Campo vazio!');
  } else {
    createListItem();
  }
});

input.addEventListener('keyup', function () {
  inputValue = input.value;
});
