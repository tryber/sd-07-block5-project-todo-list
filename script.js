const addButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const removeSelectedButton = document.getElementById('remover-selecionado');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');

// remove selected class from the task
function removeSelectedClassFromPrevious() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }
}

function addNewTaskListener(listItem) {
  listItem.addEventListener('click', function () {
    removeSelectedClassFromPrevious();
    listItem.classList.add('selected');
  });
}

function completedTask(listItem) {
  listItem.addEventListener('dblclick', function () {
    if (listItem.classList.contains('completed')) {
      listItem.classList.remove('completed');
    } else {
      listItem.classList.add('completed');
    }
  });
}

function createNewTask(newTask) {
  const listItem = document.createElement('li');
  listItem.innerText = newTask;
  orderedList.appendChild(listItem)
  ;
  addNewTaskListener(listItem);
  completedTask(listItem);
  return listItem;
}

addButton.addEventListener('click', function () {
  const inputItem = document.getElementById('texto-tarefa');
  createNewTask(inputItem.value);
  inputItem.value = '';
});

deleteButton.addEventListener('click', function () {
  const allItem = document.querySelectorAll('li');
  for (let item = 0; item < allItem.length; item += 1) {
    orderedList.removeChild(allItem[item]);
  }
});

buttonRemoveCompleted.addEventListener('click', function () {
  const allCompletedTasks = document.querySelectorAll('.completed');
  for (let item = 0; item < allCompletedTasks.length; item += 1) {
    orderedList.removeChild(allCompletedTasks[item]);
  }
});

saveButton.addEventListener('click', function () {
  localStorage.clear('');
  const completeTask = document.querySelectorAll('.completed');
  if (completeTask) {
    const listItem = document.querySelectorAll('li');
    for (let index = 0; index < listItem.length; index += 1) {
      const value = listItem[index].innerText;
      localStorage.setItem(`item${index}`, value);
      const classNameItem = listItem[index].className;
      localStorage.setItem(`class${index}`, classNameItem);
    }
    alert('Lista Salva com sucesso');
  }
});

removeSelectedButton.addEventListener('click', function () {
  const selectedItem = document.querySelector('.selected');
  orderedList.removeChild(selectedItem);
});

upButton.addEventListener('click', function () {
  const selectedItem = document.querySelector('.selected');
  let previousTask = '';
  if (selectedItem) {
    previousTask = selectedItem.previousElementSibling;
  }

  if (previousTask) {
    const txtSelected = selectedItem.innerText;
    const classSelected = selectedItem.className;
    const prevTxt = previousTask.innerText;
    const prevClass = previousTask.className;
    previousTask.innerText = txtSelected;
    previousTask.className = classSelected;
    selectedItem.innerText = prevTxt;
    selectedItem.className = prevClass;
  }
});

downButton.addEventListener('click', function () {
  const selectedItem = document.querySelector('.selected');
  let nextTask = '';

  if (selectedItem) {
    nextTask = selectedItem.nextElementSibling;
  }
  if (nextTask) {
    const txtSelected = selectedItem.innerText;
    const classSelected = selectedItem.className;
    const nextTxt = nextTask.innerText;
    const nextClass = nextTask.className;
    nextTask.innerText = txtSelected;
    nextTask.className = classSelected;
    selectedItem.innerText = nextTxt;
    selectedItem.className = nextClass;
  }
});

function initialize() {
  let getItem = '';
  let getClass = '';
  for (let storeItem = 0; storeItem < localStorage.length / 2; storeItem += 1) {
    getItem = localStorage.getItem(`item${storeItem}`);
    getClass = localStorage.getItem(`class${storeItem}`);
    const listItem = createNewTask(getItem);
    listItem.className = getClass;
  }
}

initialize();
