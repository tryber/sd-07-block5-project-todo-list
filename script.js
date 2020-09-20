// destaca item da lista selecionado com background rgb(128,128,128)
function selectedItemList() {
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].removeAttribute('style');
  }
  this.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

// marcação de itens completos
function completedItemList() {
  // if (this.hasAttribute('class')) {
  //   this.removeAttribute('class');
  if (this.className === 'completed') {
    this.className = 'tarefa';
  } else this.className = 'completed';
  this.removeAttribute('style');
}

// apagar todas as tarefas da lista
function apagaTarefas() {
  const tarefas = document.getElementsByTagName('li');
  while (tarefas.length > 0) {
    tarefas[0].remove();
  }
}

// apagar tarefas completadas da lista
function removeTodasTarefa() {
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].className === 'completed') {
      listItens[index].remove();
    }
  }
}

// adiciona tarefa à lista ordenada conforme texto digitado
function adicionarTarefa(element, textInput, classElement) {
  const listaTarefa = document.createElement('li');
  listaTarefa.innerText = textInput;
  listaTarefa.className = 'tarefa';
  listaTarefa.addEventListener('click', selectedItemList);
  listaTarefa.addEventListener('dblclick', completedItemList);
  if (classElement === 'completed') {
    listaTarefa.className = 'completed';
  }
  element.insertAdjacentElement('beforeend', listaTarefa);
}

// salva as tarefas criadas no localStorage
function salvarTarefas() {
  if (typeof (Storage) !== 'undefined') {
    localStorage.clear();
    const tarefas = document.getElementsByTagName('li');
    for (let index = 0; index < tarefas.length; index += 1) {
      localStorage.setItem(`tarefa_${index}`, tarefas[index].innerText);
      localStorage.setItem(`tarefaClasse_${index}`, tarefas[index].className);
    }
  } else {
    alert('Sorry! No Web Storage support.');
  }
}

// verifica valores referente às tarefas salvas no localStorage
function getLocalStorageValues(keyValueCheck) {
  const valueStorage = [];
  for (let keys = 0; keys < localStorage.length; keys += 1) {
    const keyStorage = (localStorage.key(keys)).split('_');
    if (keyStorage[0] === keyValueCheck) {
      valueStorage[keyStorage[1]] = localStorage.getItem(`${keyStorage[0]}_${keyStorage[1]}`);
    }
  }
  return valueStorage;
}

// carrega as tarefas, e respectiva classe, salvas no localStorage
function carregaTarefas(tarefas, classes) {
  const listaTarefasOl = document.querySelector('#lista-tarefas');
  for (let index = 0; index < tarefas.length; index += 1) {
    adicionarTarefa(listaTarefasOl, tarefas[index], classes[index]);
  }
}

// move tarefa selecionada uma posição para cima
function moverCimaTarefa() {
  const listaTarefasOl = document.querySelector('#lista-tarefas');
  const listItens = document.querySelectorAll('li');
  for (let index = 1; index < listItens.length; index += 1) {
    if (listItens[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItens[index] = listaTarefasOl.insertBefore(listItens[index], listItens[index - 1]);
    }
  }
}

// move tarefa selecionada uma posição para baixo
function moverBaixoTarefa() {
  const listaTarefasOl = document.querySelector('#lista-tarefas');
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length - 1; index += 1) {
    if (listItens[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItens[index + 1] = listaTarefasOl.insertBefore(listItens[index + 1], listItens[index]);
    }
  }
}

// remove tarefa selecionada
function removeTarefa() {
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length; index += 1) {
    if (listItens[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItens[index].remove();
    }
  }
}

window.onload = function () {
  const criarTarefaButton = document.querySelector('#criar-tarefa');
  const textoTarefaInput = document.querySelector('#texto-tarefa');
  const listaTarefasOl = document.querySelector('#lista-tarefas');

  // carrega tarefas, caso existam, do localStorage
  const tarefasSalvas = getLocalStorageValues('tarefa');
  const classesSalvas = getLocalStorageValues('tarefaClasse');
  carregaTarefas(tarefasSalvas, classesSalvas);

  // adicionar tarefa
  criarTarefaButton.addEventListener('click', function () {
    adicionarTarefa(listaTarefasOl, textoTarefaInput.value);
    textoTarefaInput.value = '';
  });

  // limpar lista de tarefas
  const apagaTudoButton = document.querySelector('#apaga-tudo');
  apagaTudoButton.addEventListener('click', apagaTarefas);

  // apaga tarefas finalizadas
  const removerFinalizadosButton = document.querySelector('#remover-finalizados');
  removerFinalizadosButton.addEventListener('click', removeTodasTarefa);

  // salvar as tarefas criadas
  const salvarTarefasButton = document.querySelector('#salvar-tarefas');
  salvarTarefasButton.addEventListener('click', salvarTarefas);

  // mover itens da lista de tarefa para cima ou para baixo
  const moverCimaButton = document.querySelector('#mover-cima');
  const moverBaixoButton = document.querySelector('#mover-baixo');
  moverCimaButton.addEventListener('click', moverCimaTarefa);
  moverBaixoButton.addEventListener('click', moverBaixoTarefa);

  // remove item selecionado da lista de tarefa
  const removerSelecionadoButton = document.querySelector('#remover-selecionado');
  removerSelecionadoButton.addEventListener('click', removeTarefa);
};
