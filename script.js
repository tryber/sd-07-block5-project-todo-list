const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const clearButton =  document.querySelector('#apaga-tudo');
const clearFinishedButton = document.querySelector('#remover-finalizados');

addButton.addEventListener('click', addTask);
clearButton.addEventListener('click', clearTaskList);
clearFinishedButton.addEventListener('click', clearFinished);

function addTask() {
  const addedItem = document.createElement('li');
  addedItem.innerText = inputText.value;
  addedItem.addEventListener('dblclick', completedItem)
  addedItem.addEventListener('click', changeItemColor);
  taskList.appendChild(addedItem);
  inputText.value = '';
}

function changeItemColor() {
  const checkSelected = document.querySelectorAll('.item-background');

  checkSelected.forEach(item => {
    if (item.classList.contains('item-background')) {
      item.classList.remove('item-background');
    }
  });
  this.classList.toggle('item-background');
}

function completedItem() {
  this.classList.toggle('completed');
}

function clearTaskList() {
  taskList.innerHTML = '';
}

function clearFinished() {
  if (taskList.childElementCount == 0) {
    return;
  } else {
    const finishedItems = document.querySelectorAll(".completed");
    finishedItems.forEach(item => {
      taskList.removeChild(item);
    });
  }


}