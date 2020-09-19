const addTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const apagar = document.querySelector('#apaga-tudo');
const apagarSelect = document.querySelector('#remover-finalizados');
const removerSelect = document.querySelector('#remover-selecionado');
const movCima = document.querySelector('#mover-cima');
const movBaixo = document.querySelector('#mover-baixo');
const saveTask = document.querySelector('#salvar-tarefas');

function removeColor() {
  const item = document.querySelectorAll('.task');
  item.forEach((key) => {
    key.classList.remove('selected');
    key.style.backgroundColor = 'white';
  });
}

function addColor() {
  const item = document.querySelectorAll('.empty');
  item.forEach((key) => {
    key.addEventListener('click', function () {
      removeColor();
      key.classList.add('selected');
      key.style.backgroundColor = 'rgb(128 , 128 , 128)';
    });
  });
}

function completed() {
  const item = document.querySelectorAll('.empty');
  item.forEach((key) => {
    key.addEventListener('dblclick', function addEvent() {
      key.classList.remove('empty');
      key.classList.add('completed');
      if (key.style.textDecoration === 'line-through solid black') {
        key.classList.remove('completed');
        key.style.textDecoration = 'none';
      } else {
        key.style.textDecoration = 'line-through solid black';
      }
    });
  });
}

function emptyCheck() {
  const item = document.querySelectorAll('.empty');
  if (document.querySelectorAll('.empty')) {
    item.forEach((key) => {
      key.classList.remove('empty');
    });
  }
}

function getToStorage() {
  const item = document.querySelectorAll('.task');
  let numberName = 0;
  let values = [];
  localStorage.clear();
  item.forEach((key) => {
    numberName += 1;
    values.push(key.className);
    values.push(key.innerText);
    values.push(key.style.backgroundColor);
    values.push(key.style.textDecoration);
    localStorage.setItem(numberName, values);
    values = [];
  });
}

function updateList() {
  const storaged = localStorage;
  for (let index = 1; index < storaged.length + 1; index += 1) {
    const store = storaged[index].split(',');
    const storageColor = `${store[2]} , ${store[3]} , ${store[4]}`;
    const elementLi = document.createElement('li');
    elementLi.innerText = `${store[1]}`;
    elementLi.className = `${store[0]}`;
    elementLi.style.backgroundColor = storageColor;
    elementLi.style.textDecoration = `${store[store.length - 1]}`;
    elementLi.classList.add('empty');
    list.appendChild(elementLi);
    addColor();
    completed();
    emptyCheck();
  }
}

updateList();

addTarefa.addEventListener('click', function () {
  const elementLi = document.createElement('li');
  elementLi.innerText = inputTarefa.value;
  elementLi.className = 'task';
  elementLi.classList.add('empty');
  list.appendChild(elementLi);
  addColor();
  completed();
  inputTarefa.value = '';
  emptyCheck();
});

apagar.addEventListener('click', function () {
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
});

apagarSelect.addEventListener('click', function () {
  const selected = document.querySelectorAll('.completed');
  selected.forEach((key) => {
    key.remove();
  });
});
removerSelect.addEventListener('click', function () {
  const select = document.querySelector('.selected');
  select.remove();
});

movCima.addEventListener('click', function () {
  if (document.querySelector('.selected') != null) {
    const select = document.querySelector('.selected');
    const selectedName = select.innerText;
    const classSelectedName = select.className;
    const previousElement = select.previousElementSibling;
    const backColorElement = select.style.backgroundColor;
    const outlineElement = select.style.textDecoration;
    if (previousElement != null) {
      select.innerText = previousElement.innerText;
      previousElement.innerText = selectedName;
      select.className = select.previousElementSibling.className;
      select.previousElementSibling.className = classSelectedName;
      select.style.backgroundColor = previousElement.style.backgroundColor;
      previousElement.style.backgroundColor = backColorElement;
      select.style.textDecoration = previousElement.style.textDecoration;
      previousElement.style.textDecoration = outlineElement;
    }
  }
});

movBaixo.addEventListener('click', function () {
  if (document.querySelector('.selected') != null) {
    const select = document.querySelector('.selected');
    const selectedName = select.innerText;
    const classSelectedName = select.className;
    const nextElement = select.nextElementSibling;
    const backColorElement = select.style.backgroundColor;
    const outlineElement = select.style.textDecoration;
    if (nextElement != null) {
      select.innerText = nextElement.innerText;
      nextElement.innerText = selectedName;
      select.className = select.nextElementSibling.className;
      select.nextElementSibling.className = classSelectedName;
      select.style.backgroundColor = nextElement.style.backgroundColor;
      nextElement.style.backgroundColor = backColorElement;
      select.style.textDecoration = nextElement.style.textDecoration;
      nextElement.style.textDecoration = outlineElement;
    }
  }
});

saveTask.addEventListener('click', function () {
  getToStorage();
});
