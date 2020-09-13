function selectLi(selectedLi) {
  document.querySelectorAll('li').forEach((li) => {
    if (selectedLi === li) {
      li.classList.toggle('selected');
    } else if (li.classList.contains('selected')) {
      li.classList.remove('selected');
    }
  });
}

function createToDo(value) {
  const li = document.createElement('li');
  li.innerText = value;
  li.addEventListener('click', () => selectLi(li));
  li.addEventListener('dblclick', () => li.classList.toggle('completed'));
  return li;
}

function addToDo() {
  const input = document.querySelector('#texto-tarefa');
  const ol = document.querySelector('ol');
  if (input.value !== '') {
    const li = createToDo(input.value);
    input.value = '';
    ol.appendChild(li);
  }
}

function initializeList() {
  if (localStorage.getItem('list-data') !== null) {
    const ol = document.querySelector('ol');
    JSON.parse(localStorage.getItem('list-data')).forEach((listItem) => {
      const li = createToDo(listItem.value);
      if (listItem.completed === true) {
        li.classList.add('completed');
      }
      ol.appendChild(li);
    });
  }
}

function clearList() {
  const list = document.querySelector('ol');
  document.querySelectorAll('li').forEach((listItem) => {
    list.removeChild(listItem);
  });
}

function removeFinished() {
  const list = document.querySelector('ol');
  document.querySelectorAll('li').forEach((listItem) => {
    if (listItem.classList.contains('completed')) {
      list.removeChild(listItem);
    }
  });
}

function removeSelected() {
  const list = document.querySelector('ol');
  document.querySelectorAll('li').forEach((listItem) => {
    if (listItem.classList.contains('selected')) {
      list.removeChild(listItem);
    }
  });
}

function saveList() {
  const list = [];
  document.querySelectorAll('li').forEach((listItem) => {
    list.push({
      value: listItem.innerText,
      completed: listItem.classList.contains('completed'),
    });
  });
  localStorage.setItem('list-data', JSON.stringify(list));
}

function initializeFunctions() {
  document.querySelector('#criar-tarefa').addEventListener('click', addToDo);
  document.querySelector('#apaga-tudo').addEventListener('click', clearList);
  document.querySelector('#remover-finalizados').addEventListener('click', removeFinished);
  document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);
  document.querySelector('#salvar-tarefas').addEventListener('click', saveList);
  initializeList();
}

document.body.onload = initializeFunctions;
