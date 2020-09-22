const addTaskBtn = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const task = document.querySelector('#texto-tarefa');
task.focus();

addTaskBtn.addEventListener('click', function () {
  if (task.value !== '') {
    const item = document.createElement('li');
    item.innerHTML = task.value;
    toDoList.appendChild(item);
    task.value = '';
    task.focus();
  }
});

toDoList.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.toggle('selected');
    }
    event.target.classList.toggle('selected');
  }
});

toDoList.addEventListener('dblclick', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

const clearBtn = document.getElementById('apaga-tudo');
clearBtn.addEventListener('click', function () {
  toDoList.innerText = '';
});

const removeCompletedBtn = document.getElementById('remover-finalizados');
removeCompletedBtn.addEventListener('click', function () {
  const remove = document.querySelectorAll('.completed');
  for (let index = 0; index < remove.length; index += 1) {
    remove[index].remove();
  }
});

const saveListBtn = document.getElementById('salvar-tarefas');
saveListBtn.addEventListener('click', function () {
  const saved = toDoList.innerHTML;
  localStorage.setItem('savedList', saved);
});

window.onload = function () {
  toDoList.innerHTML = localStorage.getItem('savedList');
};

const removeSelectedBtn = document.getElementById('remover-selecionado');
removeSelectedBtn.addEventListener('click', function () {
  const item = document.getElementsByTagName('li');
  for (let index = 0; index < item.length; index += 1) {
    if (item[index].classList.contains('selected')) {
      toDoList.removeChild(item[index]);
    }
  }
});
