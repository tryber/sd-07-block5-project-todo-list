const inicioListaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');

const butCriaTarefa = document.querySelector('#criar-tarefa');
const butApagaLista = document.querySelector('#apaga-tudo');
const butRemCompletos = document.querySelector('#remover-finalizados');
const butSalvaLista = document.querySelector('#salvar-tarefas');
const butMovAcima = document.querySelector('#mover-cima');
const butMovAbai = document.querySelector('#mover-baixo');
const butRemSelecionado = document.querySelector('#remover-selecionado');

function levaParaLista() {
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  inicioListaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}

function recriaLista() {
  for (let elemento = 0; elemento < localStorage.length; elemento += 1) {
    const starefa = localStorage.getItem(elemento);
    const tarefa = document.createElement('li');
    const objetoTarefa = JSON.parse(starefa);
    tarefa.innerText = objetoTarefa.task;
    if (objetoTarefa.status === 'completed') {
      tarefa.classList.toggle('completed');
    }
    inicioListaTarefas.appendChild(tarefa);
  }
}

function salvaLista() {
  localStorage.clear();
  const listaTarefas = document.querySelectorAll('li');
  for (let elemento = 0; elemento < listaTarefas.length; elemento += 1) {
    let situacao = '';
    if (listaTarefas[elemento].classList.contains('completed')) {
      situacao = 'completed';
    }
    const tarefa = {
      task: listaTarefas[elemento].innerText,
      status: situacao,
    };
    const starefa = JSON.stringify(tarefa);
    localStorage.setItem(elemento, starefa);
  }
}

function apagaLista() {
  localStorage.clear();
  inicioListaTarefas.innerHTML = 'Lista de Tarefas';
}

function selecao() {
  inicioListaTarefas.addEventListener('click', function (event) {
    const lista = document.getElementsByTagName('li');
    for (let index = 0; index < lista.length; index += 1) {
      if (lista[index].classList.contains('selected')) {
        lista[index].classList.toggle('selected');
      }
    }
    if (event.target !== inicioListaTarefas) {
      event.target.classList.toggle('selected');
    }
  });
}

function completos() {
  inicioListaTarefas.addEventListener('dblclick', function (event) {
    if (event.target !== inicioListaTarefas) {
      event.target.classList.toggle('completed');
    }
  });
}

function removeCompletos() {
  const lista = document.getElementsByTagName('li');
  for (let index = lista.length - 1; index >= 0; index -= 1) {
    if (lista[index].classList.contains('completed')) {
      inicioListaTarefas.removeChild(lista[index]);
    }
  }
}

function removeSelecionado() {
  const item = document.querySelector('.selected');
  inicioListaTarefas.removeChild(item);
}

function moveAcima() {
  const item = document.querySelector('.selected');
  if (item !== null && item !== inicioListaTarefas.firstChild.nextSibling) {
    inicioListaTarefas.insertBefore(item, item.previousSibling);
  }
}

function moveAbaixo() {
  const item = document.querySelector('.selected');
  if (item !== null && item !== inicioListaTarefas.lastChild) {
    inicioListaTarefas.insertBefore(item.nextSibling, item);
  }
}

window.onload = function () {
  selecao();
  completos();
  recriaLista();
  butCriaTarefa.addEventListener('click', levaParaLista);
  butApagaLista.addEventListener('click', apagaLista);
  butRemCompletos.addEventListener('click', removeCompletos);
  butRemSelecionado.addEventListener('click', removeSelecionado);
  butSalvaLista.addEventListener('click', salvaLista);
  butMovAcima.addEventListener('click', moveAcima);
  butMovAbai.addEventListener('click', moveAbaixo);
};
