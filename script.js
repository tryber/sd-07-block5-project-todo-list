const list = document.querySelector('#lista-tarefas');
const itemText = document.querySelector('#texto-tarefa');

// Function to select item

function selectItem(event) {
  const itemList = document.querySelectorAll('.item-list');

  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].style.backgroundColor = '';
    itemList[index].id = 'nonselected';
  }

  event.style.backgroundColor = 'rgb(128, 128, 128)';
  event.id = 'selected';
}

// Function to mark item as completed

function markTask(event) {
  const cssObj = window.getComputedStyle(event.target, null);
  if (cssObj.getPropertyValue('text-decoration').indexOf('line-through') !== -1) {
    event.target.className = 'item-list';
  } else {
    event.target.className += ' completed';
  }
}

// Function to add Event Listener to items list

function eventList() {
  const itemList = document.querySelectorAll('.item-list');

  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', function () {
      selectItem(itemList[index]);
    });

    itemList[index].addEventListener('dblclick', markTask);
  }
}

// Function to load local Storage list when refresh page

function checkLocalStorage() {
  if (localStorage.getItem('completeList') !== null) {
    const arrayList = localStorage.getItem('completeList').split('+,+');
    for (let index = 0; index < arrayList.length; index += 1) {
      const li = document.createElement('li');
      list.appendChild(li);
      list.lastElementChild.outerHTML = arrayList[index];
    }
  }

  eventList();
}

checkLocalStorage();

// Function to save list on local storage

function saveLocalStorage() {
  const listItems = document.querySelectorAll('.item-list');
  const arrayList = [];

  for (let index = 0; index < listItems.length; index += 1) {
    if (index === 0) {
      arrayList.push(`${listItems[index].outerHTML}+`);
    } else if (index === listItems.length - 1) {
      arrayList.push(`+${listItems[index].outerHTML}`);
    } else {
      arrayList.push(`+${listItems[index].outerHTML}+`);
    }
  }

  localStorage.setItem('completeList', arrayList);
}

// Function to add items on the list

function addItemList() {
  const li = document.createElement('li');
  li.className = 'item-list';
  li.innerText = itemText.value;
  list.appendChild(li);
  itemText.value = '';

  eventList();
}

// Function to clear all items list

function clearList() {
  const itemList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itemList.length; index += 1) {
    list.removeChild(itemList[index]);
  }
}

// Function to remove all items completed

function removeCompletedItems() {
  const itemList = document.querySelectorAll('.item-list');

  for (let index = 0; index < itemList.length; index += 1) {
    const cssObj = window.getComputedStyle(itemList[index], null);

    if (cssObj.getPropertyValue('text-decoration').indexOf('line-through') !== -1) {
      list.removeChild(itemList[index]);
    }
  }
}

// Function to remove selected item

function removeSelectedItem() {
  const itemList = document.querySelector('#selected');
  list.removeChild(itemList);
}

// Function to swap item list selected with previous item list

function moveItemUp() {
  const itemList = document.querySelector('#selected');

  if (itemList !== null && itemList.previousElementSibling !== null) {
    const item1 = itemList;
    const item2 = itemList.previousElementSibling;
    [item1.outerHTML, item2.outerHTML] = [item2.outerHTML, item1.outerHTML];
  }
  eventList();
}

// Function to swap item list selected with next item list

function moveItemDown() {
  const itemList = document.querySelector('#selected');

  if (itemList !== null && itemList.nextElementSibling !== null) {
    const item1 = itemList;
    const item2 = itemList.nextElementSibling;
    [item1.outerHTML, item2.outerHTML] = [item2.outerHTML, item1.outerHTML];
  }
  eventList();
}

// Applying Event Listener to Buttons

document.querySelector('#criar-tarefa').addEventListener('click', addItemList);

document.querySelector('#mover-cima').addEventListener('click', moveItemUp);

document.querySelector('#mover-baixo').addEventListener('click', moveItemDown);

document.querySelector('#remover-finalizados').addEventListener('click', removeCompletedItems);

document.querySelector('#remover-selecionado').addEventListener('click', removeSelectedItem);

document.querySelector('#apaga-tudo').addEventListener('click', clearList);

document.querySelector('#salvar-tarefas').addEventListener('click', saveLocalStorage);

document.querySelector('#limpar-localStorage').addEventListener('click', function () {
  localStorage.removeItem('completeList');
});
