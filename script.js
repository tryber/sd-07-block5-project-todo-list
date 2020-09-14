const inputTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonRemoveAll = document.getElementById('apaga-tudo');
const buttonRemoveDone = document.getElementById('remover-finalizados');
const buttonSaveTaskList = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonRemoveSelected = document.getElementById('remover-selecionado');

// function check input
function checkInput(inputElement) {
  let result = true;
  if (inputElement.value === '') {
    alert('É necessário informar uma tarefa.');
    result = false;
  }
  return result;
}

// function to add a class name to a element
function addClassName(element, className) {
  element.className += className;
}

// function to remove a class name from a element
function removeClassName(element, className) {
  const currentClassName = element.className.replace(className, '');
  element.className = currentClassName;
}

// function to unselect all list item
function unselectAll() {
  // get all list item
  const allListItem = document.querySelectorAll('li');
  // remove class item selected from item
  if (allListItem !== null) {
    for (let index = 0; index < allListItem.length; index += 1) {
      removeClassName(allListItem[index], ' item-selected');
    }
  }
}

// function to select one list item
function selectListItem(event) {
  // unselect all list items
  unselectAll();
  // select list item target
  addClassName(event.target, ' item-selected');
}

// function done a list item
function doneListItem(event) {
  // check if list item is done
  if (event.target.className.indexOf('completed') >= 0) {
    // un mark/check list item target
    removeClassName(event.target, ' completed');
  } else {
    // mark/check list item target
    addClassName(event.target, ' completed');
  }
}

// function add task
function addTask(taskName, completed) {
  // check input is not empty
  if (checkInput(taskName)) {
    // create a list item
    const listItem = document.createElement('li');
    // fill text from parameter
    listItem.innerText = taskName;
    // check if task is done
    if (completed) {
      addClassName(listItem, ' completed');
    }
    // add event select - one click
    listItem.addEventListener('click', selectListItem);
    // add event select - double click
    listItem.addEventListener('dblclick', doneListItem);
    // append item at the list
    taskList.appendChild(listItem);
    // clear input text
    inputTask.value = '';
  }
}

// function to clickAddTask
function clickAddTask() {
  addTask(inputTask.value, false);
}

// function to remove all list item
function removeAll() {
  taskList.innerHTML = '';
}

// function to remove all list item done
function removeAllDone() {
  // get all list items done
  const listItemsDone = document.querySelectorAll('.completed');
  // remove each one
  if (listItemsDone !== null) {
    for (let index = 0; index < listItemsDone.length; index += 1) {
      // remove item
      taskList.removeChild(listItemsDone[index]);
    }
  }
}

// function to fill list item
function fillListItem(listItems, allListItem) {
  // for each item at task list
  for (let index = 0; index < allListItem.length; index += 1) {
    // get task text
    const task = allListItem[index].innerText;
    // get task completed
    let completed = false;
    if (allListItem[index].className.indexOf('completed') >= 0) {
      completed = true;
    }
    // create the item list
    const itemList = { task, completed };
    itemList.task = task;
    itemList.completed = completed;
    // push item list on list
    listItems.push(itemList);
  }
}

// fucntion to save task list
function saveTaskList() {
  const itemsList = [];
  // get all list items
  const allListItem = document.querySelectorAll('li');
  if (allListItem !== null) {
    // fill itemList
    fillListItem(itemsList, allListItem);
  }
  // save item list like tasklist
  localStorage.setItem('taskList', JSON.stringify(itemsList));
}

// function to load the tasklist
function loadTaskList() {
  let itemsList = [];
  // get the tasklist on storage
  itemsList = JSON.parse(localStorage.getItem('taskList'));
  // for each item at itemsList
  if (itemsList !== null) {
    for (let index = 0; index < itemsList.length; index += 1) {
      addTask(itemsList[index].task, itemsList[index].completed);
    }
  }
}

// function get selected list item
function getSelectedListItem() {
  return document.querySelector('.item-selected');
}

// function to move up list item
function moveUpListItem() {
  // get selected item
  const listItem = getSelectedListItem();
  // check if exist selected item
  if (listItem !== null && listItem !== taskList.firstChild) {
    const beforeListItem = listItem.previousSibling;
    taskList.removeChild(listItem);
    taskList.insertBefore(listItem, beforeListItem);
  }
}

// function to move down list item
function moveDownListItem() {
  // get selected item
  const listItem = getSelectedListItem();
  // check if exist selected item
  if (listItem !== null && listItem !== taskList.lastChild) {
    const beforeListItem = listItem.nextSibling.nextSibling;
    taskList.removeChild(listItem);
    taskList.insertBefore(listItem, beforeListItem);
  }
}

// function to remove selected list item
function removeSelected() {
  // get selected item
  const listItem = getSelectedListItem();
  // check if exist selected item
  if (listItem !== null) {
    // remove list item
    taskList.removeChild(listItem);
  }
}

// add events to buttons
buttonAddTask.addEventListener('click', clickAddTask);
buttonRemoveAll.addEventListener('click', removeAll);
buttonRemoveDone.addEventListener('click', removeAllDone);
buttonSaveTaskList.addEventListener('click', saveTaskList);
buttonMoveUp.addEventListener('click', moveUpListItem);
buttonMoveDown.addEventListener('click', moveDownListItem);
buttonRemoveSelected.addEventListener('click', removeSelected);

// load list from storage
loadTaskList();
