// Add element to the bottom of the list and clear the text input
function addItemInList() {
  //some parts were based on the website examples (https://www.w3schools.com/jsref/met_node_appendchild.asp)
  let clearText = document.getElementById('texto-tarefa');
  let addTask = document.getElementById('lista-tarefas');
  let node = document.createElement("li"); // Create <li> node
  let text = document.createTextNode(clearText.value); // Create Text node
  node.appendChild(text); // Append the text to <li>
  node.classList.add('lista');
  node.addEventListener('click', selected); // Add click event
  node.addEventListener('dblclick', dbclicked); // Add double click event
  addTask.appendChild(node); // Append <li> to <ol> whit id = 'texto-tarefa'
  clearText.value = '';
}

// function to select an item that was clicked and show a background color
function selected(event) {
  let item = document.querySelector('.selected');
  if (item !== null) {
    item.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// function to select an item that was double clicked and show a line through
function dbclicked(event) {
  let item = event.target.classList.contains('completed');
  if (item === true) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// function clear list
function clearAll() {
  let father = document.getElementById('lista-tarefas');
  father.innerHTML = '';
}

// function clear all done
function clearAllDone() {
  let father = document.getElementById('lista-tarefas');
  let itemsCompleted = document.querySelectorAll('.completed');
  let counter = itemsCompleted.length - 1;
  while (counter >= 0) {
    father.removeChild(itemsCompleted[counter]);
    counter -= 1;
  }
}

// function remove Selected
function removeSelected() {
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    let father = document.getElementById('lista-tarefas');
    father.removeChild(selected);
  }
}

// fuction move item up
function moveItemUp() {
  let item = document.querySelector('.selected');
  if (item !== null) {
    if (item === null || item.previousSibling !== null) {
      let previousItem = item.previousSibling.innerHTML;
      item.previousSibling.innerHTML = item.innerHTML;
      item.innerHTML = previousItem;
      item.classList.remove('selected');
      item.previousSibling.classList.add('selected');
    }
  } 
}

// fuction move item up
function moveItemDown() {
  let item = document.querySelector('.selected');
  if (item !== null) {
    if (item.nextSibling !== null) {
      let previousItem = item.nextSibling.innerHTML;
      item.nextSibling.innerHTML = item.innerHTML;
      item.innerHTML = previousItem;
      item.classList.remove('selected');
      item.nextSibling.classList.add('selected');
    }
  }
}

// funtion to save file
function save() {
  let myStorage = window.localStorage;
  let files = document.querySelectorAll('.lista');
  myStorage.setItem('files',files);
}