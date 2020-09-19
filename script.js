// Projeto TO Do List

// Variables
let listItens = document.querySelectorAll('.listItem');
let selectedItem = document.querySelector('.selected');
let completedItem = document.querySelector('.completed');
let taskInput = document.querySelector('#texto-tarefa');
let ol;
let li;
let itemForErase;
// console.log(taskInput);

// Buttons
let buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener("click",addTask);
let buttonEraseAll = document.querySelector('#apaga-tudo');
buttonEraseAll.addEventListener("click",eraseAll);
let buttonRemoveCompleted = document.querySelector('#remover-finalizados');
buttonRemoveCompleted.addEventListener("click",removeCompleted);

for (let i=0; i<listItens.length; i += 1) {
  listItens[i].addEventListener('click', graySelected);
  listItens[i].addEventListener('dblclick', lineThroughSelected);
}

function addTask () {
  ol = document.getElementById("lista-tarefas");
  li = document.createElement("li");
  li.innerHTML = taskInput.value;
  li.classList.add('listItem');
  ol.appendChild(li);
  taskInput.value = '';
  li.addEventListener('click', graySelected);
  li.addEventListener('dblclick', lineThroughSelected);
  listItens = document.querySelectorAll('.listItem');
}

function graySelected(event) {
  selectedItem = document.querySelector('.selected');
  selectedItem.classList.remove('selected');// pode fazer desse jeito usando uma váriavel já declarada
  event.target.classList.add('selected');// pode fazer desse jeito usando o event que é oq entra na função
}

function lineThroughSelected(event) {
  // console.log(event.target.classList.value);
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed')}
  else {
    event.target.classList.add('completed')}
}

function eraseAll(event) {
  ol = document.getElementById("lista-tarefas");
  for (let i=0; i<listItens.length; i += 1) {
  itemForErase = document.querySelector('.listItem');
  // console.log(itemForErase);
  ol.removeChild(itemForErase);
  }
}

function removeCompleted() {
  ol = document.getElementById("lista-tarefas");
  for (let i=0; i<listItens.length; i += 1) {
  itemForRemove = document.querySelector('.completed');
  console.log(itemForRemove);
  ol.removeChild(itemForRemove);
  }
}
