const creatorButton = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');
const cleanAllButton = document.querySelector('#apaga-tudo');
const removeFinished = document.querySelector('#remover-finalizados');
const removeSelected = document.querySelector('#remover-selecionado');
const save = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
function newEventListener(elementList) {
  elementList.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
      elementList.classList.add('selected');
    } else {
      elementList.classList.add('selected');
    }
  });
}
function completedTask(elementList) {
  elementList.addEventListener('dblclick', function () {
    if (elementList.classList.contains('completed')) {
      elementList.classList.remove('completed');
    } else {
      elementList.classList.add('completed');
    }
  });
}
function launcherTask(task) {
  const elementList = document.createElement('li');
  elementList.innerText = task;
  elementList.className = 'job';
  olList.appendChild(elementList);
  newEventListener(elementList);
  completedTask(elementList);
  return elementList;
}
creatorButton.addEventListener('click', function () {
  const elementLi = document.getElementById('texto-tarefa');
  launcherTask(elementLi.value);
  elementLi.value = '';
});
cleanAllButton.addEventListener('click', function () {
  const allLi = document.querySelectorAll('li');
  (allLi.forEach((element) => { (olList.removeChild(element)); }));
});
removeFinished.addEventListener('click', function () {
  const allFinished = document.querySelectorAll('.completed');
  (allFinished.forEach((element) => { (olList.removeChild(element)); }));
});
removeSelected.addEventListener('click', function () {
  const removeSelectedElement = document.querySelector('.selected');
  olList.removeChild(removeSelectedElement);
});
save.addEventListener('click', function () {
  localStorage.clear('');
  const completed = document.querySelectorAll('.completed');
  if (completed) {
    const liList = document.querySelectorAll('li');
    for (let index = 0; index < liList.length; index += 1) {
      const value = liList[index].innerText;
      localStorage.setItem(`item${index}`, value);
      const nameElement = liList[index].className;
      localStorage.setItem(`class${index}`, nameElement);
    }
    alert('Lista Salva com sucesso');
  }
});

let getElement;
let getClass;
for (let elementStore = 0; elementStore < localStorage.length / 2; elementStore += 1) {
  getElement = localStorage.getItem(`item${elementStore}`);
  getClass = localStorage.getItem(`class${elementStore}`);
  const elementList = launcherTask(getElement);
  elementList.className = getClass;
}
moveUp.addEventListener('click', function () {
  const selectedElement = document.querySelector('.selected');
  let beforeTask = '';
  if (selectedElement) {
    beforeTask = selectedElement.previousElementSibling;
  }
  if (beforeTask) {
    const txtSelected = selectedElement.innerText;
    const classSelected = selectedElement.className;
    const prevTxt = beforeTask.innerText;
    const prevClass = beforeTask.className;
    beforeTask.innerText = txtSelected;
    beforeTask.className = classSelected;
    selectedElement.innerText = prevTxt;
    selectedElement.className = prevClass;
  }
});
moveDown.addEventListener('click', function () {
  const selectedElement = document.querySelector('.selected');
  let afterTask = '';
  if (selectedElement) {
    afterTask = selectedElement.nextElementSibling;
  }
  if (afterTask) {
    const txtSelected = selectedElement.innerText;
    const classSelected = selectedElement.className;
    const afterTxt = afterTask.innerText;
    const afterClass = afterTask.className;
    afterTask.innerText = txtSelected;
    afterTask.className = classSelected;
    selectedElement.innerText = afterTxt;
    selectedElement.className = afterClass;
  }
});
