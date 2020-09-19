function createOrdenateList() {
  const parentItemSection = document.getElementById('first-section');
  const ordenateListToDo = document.createElement('ol');
  ordenateListToDo.setAttribute('id', 'lista-tarefas');
  ordenateListToDo.className = 'lista-tarefas';
  parentItemSection.appendChild(ordenateListToDo);
}
createOrdenateList();
function removeOrdenateList() {
  const parentOfOl = document.getElementById('first-section');
  const getOl = document.querySelector('#lista-tarefas');
  parentOfOl.removeChild(getOl);
}
function loadListItem(data) {
  if (data !== null) {
    const parentOfOl = document.getElementById('first-section');
    const getOl = document.querySelector('#lista-tarefas');
    parentOfOl.removeChild(getOl);
    createOrdenateList();
    const olTag = document.getElementById('lista-tarefas');
    for (let index = 0; index < data.length; index += 1) {
      const itemLi = document.createElement('li');
      itemLi.setAttribute('id', data[index].id);
      itemLi.className = data[index].class;
      itemLi.innerText = data[index].content;
      olTag.appendChild(itemLi);
    }
  }
}
function getLocalStorage() {
  let propagationDataStorage = [];
  const tasksLoadeds = localStorage.getItem('task');
  propagationDataStorage = JSON.parse(tasksLoadeds);
  loadListItem(propagationDataStorage);
  if (propagationDataStorage === null) {
    propagationDataStorage = [];
    return propagationDataStorage;
  }
  return propagationDataStorage;
}
const arrayFullDataTasks = getLocalStorage();
loadListItem(arrayFullDataTasks);
// Lis Generator
function createListItem(data) {
  removeOrdenateList();
  createOrdenateList();
  const olTag = document.getElementById('lista-tarefas');
  for (let index = 0; index < data.length; index += 1) {
    const id = index;
    let classSet = 'item-tarefa';
    if (data[index].class.length > 11) {
      classSet = data[index].class;
    }
    const itemLi = document.createElement('li');
    itemLi.className = classSet;
    itemLi.setAttribute('id', id);
    itemLi.innerText = data[index].content;
    olTag.appendChild(itemLi);
  }
}
const getInsertButton = document.querySelector('#criar-tarefa');
getInsertButton.addEventListener('click', function () {
  const inputData = document.querySelector('#texto-tarefa');
  if (inputData.value) {
    const task = {
      id: 0,
      class: '',
      content: inputData.value,
    };
    arrayFullDataTasks.push(task);
    createListItem(arrayFullDataTasks);
    inputData.value = '';
  }
});
const getKeyEnter = document.querySelector('#texto-tarefa');
getKeyEnter.addEventListener('keydown', function (event) {
  const inputDataWitchEnter = document.querySelector('#texto-tarefa');
  if (inputDataWitchEnter.value && event.keyCode === 13) {
    const task = {
      id: 0,
      class: '',
      content: inputDataWitchEnter.value,
    };
    arrayFullDataTasks.push(task);
    createListItem(arrayFullDataTasks);
    inputDataWitchEnter.value = '';
  }
});
const getEraseAllButton = document.querySelector('#apaga-tudo');
getEraseAllButton.addEventListener('click', function () {
  const listOrdenateTarget = document.querySelector('#lista-tarefas');
  while (listOrdenateTarget.lastElementChild) {
    listOrdenateTarget.removeChild(listOrdenateTarget.lastElementChild);
  }
  while (arrayFullDataTasks.length) {
    arrayFullDataTasks.pop();
  }
  localStorage.clear();
});
document.body.addEventListener('click', function (event) {
  if (event.target.nodeName === 'LI') {
    const liSelected = document.querySelectorAll('.selected')[0];
    const liClicked = event.target;
    if (liSelected) {
      liSelected.classList.remove('selected');
      liClicked.classList.add('selected');
    } else {
      liClicked.classList.add('selected');
    }
  }
});
document.body.addEventListener('dblclick', function (event) {
  if (event.target.nodeName === 'LI') {
    const liClicked = event.target;
    liClicked.classList.toggle('completed');
  }
});
const getEraseItemButton = document.querySelector('#remover-finalizados');
getEraseItemButton.addEventListener('click', function () {
  const completedRemove = document.querySelectorAll('.item-tarefa');
  for (let index = 0; index < completedRemove.length; index += 1) {
    if (completedRemove[index].classList.contains('selected')) {
      completedRemove[index].classList.remove('selected');
    }
  }
  const arrayFilter = [];
  for (let outherIndex = 0; outherIndex < completedRemove.length; outherIndex += 1) {
    arrayFilter.push({
      id: completedRemove[outherIndex].id,
      class: completedRemove[outherIndex].className,
      content: completedRemove[outherIndex].innerText,
    });
  }
  function filterCase(data) {
    return data.class !== 'item-tarefa completed';
  }
  const filtredItensCompleted = arrayFilter.filter(filterCase);
  createListItem(filtredItensCompleted);
});
const saveTasksButton = document.querySelector('#salvar-tarefas');
saveTasksButton.addEventListener('click', function () {
  const itemsForSave = document.querySelectorAll('.item-tarefa');
  for (let index = 0; index < itemsForSave.length; index += 1) {
    if (itemsForSave[index].classList.contains('selected')) {
      itemsForSave[index].classList.remove('selected');
    }
  }
  const arrayForLocalStorage = [];
  for (let index = 0; index < itemsForSave.length; index += 1) {
    arrayForLocalStorage.push({
      id: itemsForSave[index].id,
      class: itemsForSave[index].className,
      content: itemsForSave[index].innerText,
    });
  }
  localStorage.setItem('task', JSON.stringify(arrayForLocalStorage));
});
const buttonDeleteItemSelected = document.querySelector('#remover-selecionado');
buttonDeleteItemSelected.addEventListener('click', function () {
  const selectedRemove = document.querySelectorAll('.item-tarefa');
  for (let index = 0; index < selectedRemove.length; index += 1) {
    if (selectedRemove[index].classList.contains('completed')) {
      selectedRemove[index].classList.remove('completed');
    }
  }
  const arrayFilter = [];
  for (let outherIndex = 0; outherIndex < selectedRemove.length; outherIndex += 1) {
    arrayFilter.push({
      id: selectedRemove[outherIndex].id,
      class: selectedRemove[outherIndex].className,
      content: selectedRemove[outherIndex].innerText,
    });
  }
  function filterCase(data) {
    return data.class !== 'item-tarefa selected';
  }
  const filtredItensSelected = arrayFilter.filter(filterCase);
  createListItem(filtredItensSelected);
});
function itemUp(data, from, to) {
  if (to >= 0 && from < data.length) {
    data.splice(to, 0, data.splice(from, 1)[0]);
    createListItem(data);
  }
}
document.body.addEventListener('click', function (event) {
  if (event.target.id === 'mover-cima' || event.target.id === 'mover-baixo') {
    const selectedItemMoveUp = document.querySelectorAll('.item-tarefa');
    const arrayFilter = [];
    for (let index = 0; index < selectedItemMoveUp.length; index += 1) {
      arrayFilter.push({
        id: selectedItemMoveUp[index].id,
        class: selectedItemMoveUp[index].className,
        content: selectedItemMoveUp[index].innerText,
      });
    }
    const arrayReceived = document.getElementsByClassName('selected');
    if (arrayReceived.length !== 0) {
      const itemFrom = parseInt(arrayReceived[0].id, 10);
      let itemTo = 0;
      if (event.target.id === 'mover-cima') {
        itemTo = itemFrom - 1;
      } else {
        itemTo = itemFrom + 1;
      }
      itemUp(arrayFilter, itemFrom, itemTo);
    }
  }
});
