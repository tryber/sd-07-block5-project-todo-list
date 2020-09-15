const list = document.getElementById('lista-tarefas');
let listaCompleta;

// marca e desmarca quando clicado 1 vez
function marcaSelecionado(item) {
  const itemSelecionado = item.target;
  for (let index = 0; index < listaCompleta.length; index += 1) {
    const apagaCor = listaCompleta[index];
    apagaCor.classList.remove('item-selecionado');
    apagaCor.style.backgroundColor = '';
  }
  itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  itemSelecionado.classList.add('item-selecionado');
}

// deixa tachado se clicar duas vezes
function marcaCompleto(item) {
  const itemFinalizado = item.target;
  if (itemFinalizado.classList.contains('completed')) {
    itemFinalizado.classList.remove('completed');
    itemFinalizado.style.textDecoration = '';
  } else {
      itemFinalizado.classList.add('completed');
      let prop = window.getComputedStyle(itemFinalizado).getPropertyValue('text-decoration');
      itemFinalizado.style.textDecoration = prop;
    }
}
// Adiciona o elemento da lista e monitora o clique e o duplo-clique assim que ele é criado
function addElement() {
  const textInput = document.getElementById('texto-tarefa');
  const tarefaDigitada = textInput.value;
  const elementList = document.createElement('li');
  list.appendChild(elementList).classList = 'item-list';
  elementList.textContent = tarefaDigitada;
  elementList.addEventListener('click', marcaSelecionado);
  elementList.addEventListener('dblclick', marcaCompleto);
  listaCompleta = document.querySelectorAll('.item-list');
  textInput.value = '';
  textInput.focus();
}

const buttonAdd = document.getElementById('criar-tarefa');
buttonAdd.addEventListener('click', addElement);

function apagarLista() {
  const itens = document.getElementsByTagName('li');
  const lista = document.getElementsByTagName('ol')[0];
  for (let index = itens.length - 1; index >= 0; index -= 1) {
    lista.removeChild(itens[index]);
  }
}

const buttonApaga = document.getElementById('apaga-tudo');
buttonApaga.addEventListener('click', apagarLista);

function apagarFinalizados() {
  const lista = document.getElementsByTagName('ol')[0];
  const itens = document.getElementsByTagName('li');
  for (let index = itens.length - 1; index >= 0; index -= 1) {
    if (itens[index].classList.contains('completed')) {
      lista.removeChild(itens[index]);
    }
  }
}

const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
buttonRemoveFinalizados.addEventListener('click', apagarFinalizados);

function apagaSelecionado() {
  const lista = document.getElementsByTagName('ol')[0];
  const itens = document.getElementsByTagName('li');
  for (let index = itens.length - 1; index >= 0; index -= 1) {
    if (itens[index].classList.contains('item-selecionado')) {
      lista.removeChild(itens[index]);
    }
  }
}

const buttonRemoveSelecionado = document.getElementById('remover-selecionado');
buttonRemoveSelecionado.addEventListener('click', apagaSelecionado);

function moverCima() {
  const lista = document.getElementById('lista-tarefas');
  const itensList = document.getElementsByClassName('item-selecionado');
  if (itensList[0] !== undefined) {
    if (itensList[0].previousElementSibling !== null) {
      lista.insertBefore(itensList[0], itensList[0].previousElementSibling);
    }
  }
}

const buttonMoverCima = document.getElementById('mover-cima');
buttonMoverCima.addEventListener('click', moverCima);

function moverBaixo() {
  const lista = document.getElementById('lista-tarefas');
  const itensList = document.getElementsByClassName('item-selecionado');
  if (itensList[0] !== undefined) {
    if (itensList[0].nextElementSibling !== null) {
      lista.insertBefore(itensList[0].nextElementSibling, itensList[0]);
    }
  }
}

const buttonMoverBaixo = document.getElementById('mover-baixo');
buttonMoverBaixo.addEventListener('click', moverBaixo);

function salvarTarefas() {
  localStorage.clear();
  const listaTotal = document.querySelector('ol');
  localStorage.setItem('Lista', listaTotal.innerHTML);
}

window.onload = function () {
  document.querySelector('ol').innerHTML = localStorage.getItem('Lista');
};

let buttonSalvar = document.getElementById('salvar-tarefas');
buttonSalvar.addEventListener('click', salvarTarefas);
