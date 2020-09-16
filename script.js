const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const deleteAll = document.getElementById('apaga-tudo');
const deleteConcludedTasks = document.getElementById('remover-finalizados');
const elements = [];
const saveTasks = document.getElementById('salvar-tarefas');
const clearHistory = document.getElementById('apagar-histórico');
const removeSelected = document.getElementById('remover-selecionado');
const selectedTask = document.getElementsByClassName('selected');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

clearHistory.addEventListener('click', () => {
  localStorage.clear();
});

function loadItens() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const savedElement = JSON.parse(localStorage.getItem(`item${i}`));
    const newItem = document.createElement('li');
    newItem.innerText = savedElement.text;
    newItem.className = savedElement.objectClass;
    list.appendChild(newItem);
  }
}

document.onload = loadItens();

function changeBackgroundColor(element) {
  element.addEventListener('click', () => {
    if (!element.classList.contains('selected')) {
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('selected');
      }
      element.classList.add('selected');
    }
  });
}

function completeTasks(element) {
  element.addEventListener('dblclick', () => {
    element.classList.toggle('completed');
  });
}

function insertItem() {
  const newItem = document.createElement('li');
  newItem.innerText = textInput.value;
  changeBackgroundColor(newItem);
  completeTasks(newItem);
  list.appendChild(newItem);
  textInput.value = '';
  elements.push(newItem);
}

addNewItem.addEventListener('click', insertItem);
deleteAll.addEventListener('click', () => {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].remove();
  }
});

deleteConcludedTasks.addEventListener('click', () => {
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('completed')) {
      elements[i].remove();
    }
  }
});

function saveAllTasks() {
  const toSave = document.getElementsByTagName('li');
  localStorage.clear();
  for (let i = 0; i < toSave.length; i += 1) {
    const itens = toSave[i];
    const finalToSave = {
      text: itens.innerHTML,
      objectClass: itens.className,
    };
    localStorage.setItem(`item${i}`, JSON.stringify(finalToSave));
  }
}

saveTasks.addEventListener('click', saveAllTasks);
removeSelected.addEventListener('click', () => {
  list.removeChild(selectedTask[0]);
});

function moveTaskUp() {
  const listLength = document.getElementsByTagName('li');
  if (selectedTask.length > 0 &&
      listLength.length > 0 && selectedTask[0].previousElementSibling !== null) {
    list.insertBefore(selectedTask[0], selectedTask[0].previousElementSibling);
  }
}

function moveTaskDown() {
  const listLength = document.getElementsByTagName('li');
  if (selectedTask.length > 0 &&
      listLength.length > 0 && selectedTask[0].nextElementSibling !== null) {
    list.insertBefore(selectedTask[0].nextElementSibling, selectedTask[0]);
  }
}

moveUp.addEventListener('click', moveTaskUp);
moveDown.addEventListener('click', moveTaskDown);
