const listaOrdenadaDeTarefas = document.getElementById('lista-tarefas');

const mensagemAoUsuario = function (mensagem) {
  document.getElementById('avisos').textContent = mensagem;
};

const criaTarefa = function () {
  const tarefaInput = document.getElementById('texto-tarefa');

  if (tarefaInput.value) {
    mensagemAoUsuario('');
    const novaTarefa = document.createElement('li');
    const textNode = document.createTextNode(tarefaInput.value);
    novaTarefa.appendChild(textNode);
    listaOrdenadaDeTarefas.appendChild(novaTarefa);

    tarefaInput.value = '';

    tarefaInput.focus();
  } else {
    mensagemAoUsuario('Favor descreva a tarefa antes de adicionar');
  }
};

const limpaSelecao = function () {
  const itensLista = document.querySelectorAll('li');
  itensLista.forEach((item) => {
    item.classList.remove('selected');
  });
};

const selecionaItemLista = function (event) {
  const itemLista = event.target;
  if (itemLista.nodeName === 'LI') {
    limpaSelecao();
    itemLista.classList.add('selected');
  }
};

const salvarLista = function () {
  localStorage.clear();
  localStorage.setItem('listaTarefas', listaOrdenadaDeTarefas.innerHTML.replace(/selected/g, ''));
};

const marcarCompleto = function (event) {
  const item = event.target;
  event.stopPropagation();
  if (item.nodeName === 'LI') {
    item.classList.toggle('completed');
  }
  limpaSelecao();
};

const apagaTudo = function () {
  const listaLi = document.querySelectorAll('li');
  listaLi.forEach((item) => {
    item.remove();
  });
};

(function () {
  document.querySelector('ol').innerHTML = localStorage.getItem('listaTarefas');
}());

const moveParaBaixo = function () {
  const itemSelecionado = document.querySelector('.selected');
  const tagPai = document.getElementById('lista-tarefas');
  const ultimoItem = tagPai.lastElementChild;

  if (ultimoItem !== itemSelecionado && itemSelecionado !== null) {
    tagPai.insertBefore(itemSelecionado.nextElementSibling, itemSelecionado);
  }
};

const moverParaCima = function () {
  const itemSelecionado = document.querySelector('.selected');
  const tagPai = document.getElementById('lista-tarefas');
  const primeiroItem = tagPai.firstElementChild;

  if (primeiroItem !== itemSelecionado && itemSelecionado !== null) {
    tagPai.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
  }
};

const removerFinalizados = function () {
  const itensCompletos = document.querySelectorAll('.completed');
  itensCompletos.forEach((item) => {
    item.remove();
  });
};

const removerSelecionados = function () {
  const itenSelecionado = document.querySelectorAll('.selected')[0];
  itenSelecionado.remove();
};

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', criaTarefa);
  listaOrdenadaDeTarefas.addEventListener('dblclick', marcarCompleto);
  listaOrdenadaDeTarefas.addEventListener('click', selecionaItemLista);
  document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
  document.getElementById('mover-baixo').addEventListener('click', moveParaBaixo);
  document.getElementById('mover-cima').addEventListener('click', moverParaCima);
  document.getElementById('remover-finalizados').addEventListener('click', removerFinalizados);
  document.getElementById('remover-selecionado').addEventListener('click', removerSelecionados);
};
