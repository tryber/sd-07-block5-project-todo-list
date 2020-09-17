//  cria a tarefa e apaga do input-box
const btnNewItem = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
btnNewItem.addEventListener('click', function () {
  const textInput = document.querySelector('#texto-tarefa').value;
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = textInput;
  toDoList.appendChild(listItem);
  document.querySelector('#texto-tarefa').value = '';
// trata evento de deixar cinza e tirar
  listItem.addEventListener('click', function () {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    listItem.classList.add('selected');
  });
// trata evento de deixar riscado e tirar
  listItem.addEventListener('dblclick', function () {
    if (listItem.classList.contains('completed')) {
      listItem.classList.remove('completed');
    } else {
      listItem.classList.add('completed');
    }
  });
// remove itens com check
  const btnClearDoneList = document.querySelector('#remover-finalizados');
  btnClearDoneList.addEventListener('click', function () {
    const listItens = document.querySelectorAll('li');
    for (let index = 0; index < listItens.length; index += 1) {
      const listCheck = listItens[index];
      if (listCheck.classList.contains('completed')) {
        toDoList.removeChild(listCheck);
      }
    }
  });
// trata evento remover item com selected
  const btnClearSelectedItem = document.querySelector('#remover-selecionado');
  btnClearSelectedItem.addEventListener('click', function () {
    const listItens = document.querySelectorAll('li');
    for (let index = 0; index < listItens.length; index += 1) {
      const listSelected = listItens[index];
      if (listSelected.classList.contains('selected')) {
        toDoList.removeChild(listSelected);
      }
    }
  });
// trata evento salvar lista
  const btnSaveList = document.querySelector('#salvar-tarefas');
  btnSaveList.addEventListener('click', function () {
    localStorage.clear();
    const allItens = document.querySelector('ol').innerHTML;
    localStorage.setItem('finalList', allItens);
  });
});
// trata evento limpar toda a lista
const btnClearList = document.querySelector('#apaga-tudo');
btnClearList.addEventListener('click', function () {
  toDoList.innerHTML = '';
});
// trata evento mover item da lista para cima
// source:https://pt.stackoverflow.com/questions/96648/after-jquery-em-js-puro#:~:text=after()%20insere%20um%20elemento,insertBefore()%20%2C%20segundo%20a%20documenta%C3%A7%C3%A3o%3A&text=N%C3%A3o%20existe%20um%20m%C3%A9todo%20insertAfter,antes%20do%20pr%C3%B3ximo%20elemento%20irm%C3%A3o.
const btnMoveUp = document.querySelector('#mover-cima');
btnMoveUp.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (toDoList.length !== 0) {
      if (selected.previousElementSibling !== null) {
        document.querySelector('ol').insertBefore(selected, selected.previousElementSibling);
      }
    }
  }
});
// trata evento mover item da lista para baixo
const btnMoveDown = document.querySelector('#mover-baixo');
btnMoveDown.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (toDoList.length !== 0) {
      if (selected.nextElementSibling !== null) {
        document.querySelector('ol').insertBefore(selected.nextElementSibling, selected);
      }
    }
  }
});
// recuperar lista salva
window.onload = function () {
  document.querySelector('ol').innerHTML = localStorage.getItem('finalList');
};
