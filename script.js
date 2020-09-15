const inputText = document.getElementById('texto-tarefa');
const doList = document.getElementById('lista-tarefas');
const lineList = document.getElementsByTagName('li');
const buttonCreatTask = document.getElementById('criar-tarefa');
const buttonDeleteAll = document.getElementById('apaga-tudo');
const buttonRmTask = document.getElementById('remover-finalizados');
const rmTaskDone = document.getElementsByClassName('completed');
const check = 0;

function deleteAll() {
  do {
    doList.removeChild(lineList[check]);
  }
  while (check < lineList.length);
}

function rmTask() {
  do {
    doList.removeChild(rmTaskDone[check]);
  }
  while (check < rmTaskDone.length);
}

function backgroundSelected() {
  for (let index = 0; index < lineList.length; index += 1) {
    lineList[index].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128';
}

function taskDone() {
  if (this.className === '') {
    this.className = 'completed';
  } else {
    this.className = '';
  }
}

function addList() {
  const listLine = document.createElement('li');
  doList.appendChild(listLine);
  listLine.addEventListener('click', backgroundSelected);
  listLine.addEventListener('dblclick', taskDone);
  listLine.innerText = inputText.value;
  inputText.value = '';
}

buttonCreatTask.addEventListener('click', addList);
buttonDeleteAll.addEventListener('click', deleteAll);
buttonRmTask.addEventListener('click', rmTask);
