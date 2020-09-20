// Função para alterar o background de um item na lista quando clicado

function changeSelected(event) {
  const item = document.querySelectorAll('li');

  for (let i = 0; i < item.length; i += 1) {
    if (item[i].classList.contains('selected')) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

// Função para riscar uma tarefa concluida

function checkList(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Função para criar items na lista puxando o valor do input

function createListItem() {
  const ordList = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const item = document.createElement('li');

  item.innerText = input.value;
  item.className = 'item';
  item.addEventListener('click', changeSelected);
  item.addEventListener('dblclick', checkList);

  ordList.appendChild(item);

  input.value = '';
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', createListItem);

// Função para salvar todos os itens da lista para uma proxima sessão

// Função para salvar a lista

function saveList() {
  localStorage.clear();

  const ol = document.getElementById('lista-tarefas');

  localStorage.setItem('itemList', ol.innerHTML);
}

const saveListButton = document.getElementById('salvar-tarefas');

saveListButton.addEventListener('click', saveList);

// Função para puxar lista salva na ultima sessão

function newSession() {
  const ol = document.getElementById('lista-tarefas');

  ol.innerHTML = localStorage.getItem('itemList');
}

window.onload = newSession;

// Função para apagar toda a lista

function clearAll() {
  const ol = document.getElementById('lista-tarefas');

  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }

// Função baseada no site: https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
}

const clearButton = document.getElementById('apaga-tudo');

clearButton.addEventListener('click', clearAll);

// Função para apagar somente tarefas concluidas

function clearCompletedList() {
  const ol = document.getElementById('lista-tarefas');
  const completed = document.querySelectorAll('.completed');

  let index = 0;

  while (index < completed.length) {
    ol.removeChild(completed[index]);
    index += 1;
  }
}

const completedListButton = document.getElementById('remover-finalizados');

completedListButton.addEventListener('click', clearCompletedList);

// Função para apagar somente elemento selecionado

function clearSelectedItem() {
  const ol = document.getElementById('lista-tarefas');
  const selected = document.querySelector('.selected');

  ol.removeChild(selected);
}

const clearSelectedButton = document.getElementById('remover-selecionado');

clearSelectedButton.addEventListener('click', clearSelectedItem);

// Função para mover o elemento selecionado para cima

function moveUp() {
  const lis = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  const ol = document.getElementById('lista-tarefas');

  if (lis.length === 0 || selected === null) {
    alert('É necessário adicionar tarefas ou selecionar uma tarefa!');
  } else if (selected.previousElementSibling === null) {
    alert('Sua tarefa já está no topo da lista!');
  } else {
    ol.insertBefore(selected, selected.previousElementSibling);
  }
}

const moveUpButton = document.getElementById('mover-cima');

moveUpButton.addEventListener('click', moveUp);

// Função para mover o elemento selecionado para baixo

function moveDown() {
  const lis = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  const ol = document.getElementById('lista-tarefas');

  if (lis.length === 0 || selected === null) {
    alert('É necessário adicionar tarefas ou selecionar uma tarefa!');
  } else if (selected.nextElementSibling === null) {
    alert('Sua tarefa já está no fim da lista!');
  } else {
    ol.insertBefore(selected.nextElementSibling, selected);
  }
}

const moveDownButton = document.getElementById('mover-baixo');

moveDownButton.addEventListener('click', moveDown);
