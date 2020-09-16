const storageTodoList = {
  index: function () {
    let todoList = JSON.parse(localStorage.getItem('todo-list'));

    return todoList;
  },

  insert: function (todoList) {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  }
}

// lista de tarefas
let todoList = [];

const clearInputValue = () => document.getElementById('texto-tarefa').value = '';

const getOl = () => document.getElementById('lista-tarefas');

const getInputValue = () => document.getElementById('texto-tarefa').value;

const getBtnAdd = () => document.getElementById('criar-tarefa');

const getBtnRemoveFinalized = () => document.getElementById('remover-finalizados');

const getBtnRemoveAll = () => document.getElementById('apaga-tudo');

const getBtnRemoveSelected = () => document.getElementById('remover-selecionado');

const getBtnSave = () => document.getElementById('salvar-tarefas');

const getLiAll = () => document.getElementsByTagName('li');

const getLiCompleted = () => document.querySelectorAll('.completed');

const getLiSelected = () => document.querySelectorAll('.selected')[0];

const createLi = () => document.createElement('li');

const getBtnCima = () => document.getElementById('mover-cima');

const getBtnBaixo = () => document.getElementById('mover-baixo');

const createDiv = () => document.createElement('div');

function removeLi(li) {
  let ols = getOl();
  ols.removeChild(li);
}

function upTodo() {
  let myOl = getOl()
  let myLiForUp = getLiSelected();

  if (myOl.childNodes[0] == myLiForUp) return;
  console.log(myOl.childNodes[0]);

  let myLiForDown = myLiForUp.previousSibling;
  myOl.insertBefore(myLiForUp, myLiForDown);

  let myLiValue = myLiForUp.innerText;
  let index = todoList.findIndex((a) => a.value == myLiValue);
  
  todoList.splice(index - 1, 0, todoList[index]);
  todoList.splice(index + 1, 1);
}

function downTodo() {
  let myOl = getOl();
  let myLiForDown = getLiSelected();

  if (myOl.childNodes[myOl.childNodes.length - 1] == myLiForDown) return;

  let myLiForUp = myLiForDown.nextSibling;
  myOl.insertBefore(myLiForUp, myLiForDown);

  let myLiValue = myLiForDown.innerText;
  let index = todoList.findIndex((todo) => todo.value == myLiValue);

  todoList.splice(index + 2, 0, todoList[index]);
  todoList.splice(index, 1);
}

let btnCima = getBtnCima();
btnCima.addEventListener('click', function () {
  upTodo();
});

let btnBaixo = getBtnBaixo();
btnBaixo.addEventListener('click', function () {
  downTodo();
});

function insertPropertyInElement({ element = '', text = '', classe = '' }) {
  if (element) {
    let myElement = element;

    if (text) myElement.innerText = text;
    if (classe) myElement.className = classe;
  }
}

// armazena o li que foi splitado
let liCurrentSplited;

// adicionando evento de click no li
function eventLiClick(li) {
  li.addEventListener('click', function (event) {
    event.target.classList.add('selected');

    if (liCurrentSplited) liCurrentSplited.classList.remove('selected');

    liCurrentSplited = li;
  });
}

// adicionando evendo de double click no li
function eventLiDblClick(li) {
  li.addEventListener('dblclick', function (event) {
    li.classList.toggle('completed');
    let lis = getLiAll();

    for (let index = 0; index < lis.length; index += 1) {
      if (lis[index].className == 'completed') todoList[index].classes = 'completed';
    }
  });
}

// adicionando eventos no li
function addEventSplitLi(li) {
  eventLiClick(li);

  eventLiDblClick(li);
}

function insertLiInOl(text, classe) {
  let ol = getOl();
  let li = createLi();

  insertPropertyInElement({ text: text, element: li, classe: classe });
  addEventSplitLi(li);

  ol.appendChild(li);
  todoList.push({ value: text, classes: '' });
}

let btnAdd = getBtnAdd();
btnAdd.addEventListener('click', function () {
  if (getInputValue()) insertLiInOl(getInputValue());

  clearInputValue();
});

// remove finalizados
let btnRemoveFinalized = getBtnRemoveFinalized();
btnRemoveFinalized.addEventListener('click', function () {
  let li = getLiCompleted();

  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className == 'completed') removeLi(li[index]);
  }
});

// remove todos
const btnRemoveAll = getBtnRemoveAll();
btnRemoveAll.addEventListener('click', function () {
  let ol = getOl();

  ol.innerHTML = '';
});

// save storage
const btnSave = getBtnSave();
btnSave.addEventListener('click', function () {
  if (todoList) storageTodoList.insert(todoList);
});

const btnRemoveSelected = getBtnRemoveSelected();
btnRemoveSelected.addEventListener('click', function () {
  let selected = document.getElementsByClassName('selected')[0];

  if (selected) {
    removeLi(selected);
    todoList = [];
  }
});

window.onload = function () {
  let todoList = storageTodoList.index();

  if (todoList) {
    for (let index = 0; index < todoList.length; index += 1) {
      insertLiInOl(todoList[index].value, todoList[index].classes);
    }
  }
}
