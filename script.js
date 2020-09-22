// Restore information saved at local storage.
document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('saved');

const botaoAdd = document.getElementById('criar-tarefa');
const enter = document.getElementById('texto-tarefa');
// Function to add products with click.
function addProduct() {
  const lista = document.getElementById('lista-tarefas');
  const itensList = document.createElement('li');
  itensList.innerText = document.getElementById('texto-tarefa').value;
  itensList.className = 'itens-list';
  lista.appendChild(itensList);
  itensList.value = '';
  itensList.focus();
}
// Call the function addProduct.
botaoAdd.addEventListener('click', addProduct);
// Function to add products with key Enter.
enter.addEventListener('keyup', function (enterAdd) {
  if (enterAdd.keyCode === 13) {
    addProduct();
  }
});
// Function to remove all itens list.
const botaoClear = document.getElementById('apaga-tudo');
function apagaTudo() {
  const lista = document.getElementById('lista-tarefas');
  while (lista.firstChild) {
  lista.removeChild(lista.lastChild);
 }
}
botaoClear.addEventListener('click', apagaTudo);
// Function to select indivudual item.
const itensList = document.querySelector('ol');
function selected(clickIten) {
  let itemList = document.querySelector('.selected');
  if (itemList !== null) {
    itemList.classList.remove('selected');
  }
  clickIten.target.classList.add('selected');
  document.getElementById('lista-tarefas').classList.remove('selected');
}
itensList.addEventListener('click', selected)
// Function to mark as completed.
itensList.addEventListener('dblclick', function (itensList) {
  if (itensList.target.tagName === 'LI') {
    itensList.target.classList.toggle('completed');
  }
});
// Function to remove finished item.
const removerFinalizados = document.querySelector('#remover-finalizados');
removerFinalizados.addEventListener('click', function () {
  const linhas = document.querySelectorAll('.completed');
  for (let count = 0; count < linhas.length; count += 1) {
    linhas[count].remove();
  }
});
// Function to remove completed item.
const removerSelecionado = document.querySelector('#remover-selecionado');
removerSelecionado.addEventListener('click', function () {
  const linhas = document.querySelectorAll('.selected');
  for (let count = 0; count < linhas.length; count += 1) {
  linhas[count].remove();
  }
});

// Function to move iten up.
function itensListMoveUp() {
  const list = document.getElementById('lista-tarefas');
  const listItens = document.querySelectorAll('li');
  for (let count = 1; count < listItens.length; count += 1) {
    if ((listItens[count].className == 'itens-list selected') || (listItens[count].className == 'itens-list completed selected') || (listItens[count].className == 'itens-list selected completed')) {
        listItens[count] = list.insertBefore(listItens[count], listItens[count - 1]);
      }
  }
}

document.getElementById('mover-cima').addEventListener('click', itensListMoveUp);
// Function to move iten down.
function itensListMoveDown() {
  const list = document.getElementById('lista-tarefas');
  const listItens = document.querySelectorAll('li');
  for (let count = 0; count < listItens.length - 1; count += 1) {
    if ((listItens[count].className == 'itens-list selected') || (listItens[count].className == 'itens-list completed selected') || (listItens[count].className == 'itens-list selected completed')) {
        listItens[count] = list.insertBefore(listItens[count + 1], listItens[count]);
      }
  }
}
document.getElementById('mover-baixo').addEventListener('click', itensListMoveDown);
// Function to save list status
const saveTask = document.getElementById('salvar-tarefas');
saveTask.addEventListener('click', function () {
  localStorage.setItem('saved', document.getElementById('lista-tarefas').innerHTML);
});
// Function to auto save list status
const automaticSave = function () {
  localStorage.setItem('saved', document.getElementById('lista-tarefas').innerHTML);
}
window.onchange = automaticSave;