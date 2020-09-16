const textInput = document.querySelector('#texto-tarefa');
const creator = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clear = document.querySelector('#apaga-tudo');
const rmSelecteds = document.querySelector('#remover-selecionado');
const rmCompleteds = document.querySelector('#remover-finalizados');
const saveList = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');

creator.addEventListener('click', () => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(textInput.value);
  node.appendChild(textNode);
  list.appendChild(node);
  textInput.value = '';
});

clear.addEventListener('click', () => {
  list.innerHTML = '';
});


list.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const li = event.target;
  if (selected != null) {
    selected.classList.remove('selected');
    li.classList.add('selected');
  } else {
    li.classList.add('selected');
  }
});

list.addEventListener('dblclick', (event) => {
  const li = event.target;
  if (li.classList.contains('completed')) {
    li.classList.remove('completed');
  } else {
    li.classList.add('completed');
  }
});

rmSelecteds.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('selected')) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
});


rmCompleteds.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('completed')) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
});

moveUp.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('selected')) {
      if (i !== 0) {
        list.insertBefore(elements[i], elements[i - 1]);
      }
    }
  }
});

moveDown.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('selected')) {
      if (i !== (elements.length - 1)) {
        list.insertBefore(elements[i + 1], elements[i]);
      }
    }
  }
});


saveList.addEventListener('click', () => {
  const elements = list.innerHTML;
  localStorage.setItem('list', elements);
});

window.addEventListener('load', () => {
  const elements = localStorage.getItem('list');
  list.innerHTML = elements;
});
