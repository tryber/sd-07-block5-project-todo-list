const containerList = document.querySelector('#container-list');
const inputList = document.querySelector('#texto-tarefa');
const btnNewTask = document.querySelector('#criar-tarefa');
const btnClearList = document.querySelector('#apaga-tudo');
const btnRemoveTask = document.querySelector('#remover-selecionado');

const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
containerList.appendChild(ol);

btnNewTask.addEventListener('click', function () {
  if(inputList.value === '') {
    alert('Adicione uma tarefa!');
  } else {
    const li = document.createElement('li') ;
    const listItem = document.createTextNode(inputList.value);
    li.className = 'task';
    li.appendChild(listItem);
    ol.appendChild(li);
    inputList.value = '';
  }
});

btnClearList.addEventListener('click', function () {
  if (ol.children.length === 0 ) {
    alert('Não há tarefas listadas');
  } else {
    const taskListed = document.querySelectorAll('.task');
    for (let indexList = 0; indexList < taskListed.length; indexList += 1) {
     ol.removeChild(taskListed[indexList]);
    }
  }
});

ol.addEventListener('click', function(event) {
  if (event.target.className === 'task') {
    for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].className = 'task';
    }
    event.target.className = 'selected';
  } else {
    for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].className = 'task';
  }
  }
});

btnRemoveTask.addEventListener('click', function () {
  const taskSelected = document.querySelector('.selected');
  if (document.querySelector('.selected') == null) {
    alert('Nenhuma tarefa selecionada');
  } else {
    ol.removeChild(taskSelected);
  }
});
