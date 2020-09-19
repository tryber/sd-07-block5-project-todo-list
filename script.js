const textoTarefa = document.getElementById('texto-tarefa');
const botaoCriaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoMoverBaixo = document.getElementById('mover-baixo');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');

// Carregando lista salva na LocalStorage
if (typeof (Storage) !== 'undefined') {
  if (localStorage.length !== 0) {
    const listaArmazenada = JSON.parse(localStorage.getItem('lista'));
    for (let i = 0; i < listaArmazenada.length; i += 1) {
      const listaItem = document.createElement('li');
      listaItem.className = listaArmazenada[i].classe;
      listaItem.innerText = listaArmazenada[i].texto;
      listaTarefas.appendChild(listaItem);
    }
  }
}

// Funcionalidade do botão Salvar Lista
botaoSalvarTarefas.addEventListener('click', function () {
  const tag = [{
    texto: '',
    classe: '',
  }];
  const tarefas = [];

  for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
    tag.texto = listaTarefas.children[i].innerText;
    tag.classe = listaTarefas.children[i].className;

    tarefas.push(Object.assign({}, tag));
  }
  localStorage.setItem('lista', JSON.stringify(tarefas));
});

// Botão que remove alguns item selecionado
botaoRemoverSelecionado.addEventListener('click', function () {
  // Testa se existe algum objeto selecionado
  if (document.querySelectorAll('.selecionado').length !== 0) {
    listaTarefas.removeChild(document.querySelector('.selecionado'));
  }
});

// Botão que move itens para cima
botaoMoverCima.addEventListener('click', function () {
  const selecionado = document.querySelector('.selecionado');
  const primeiroFilho = listaTarefas.firstElementChild;

  // Testa se existe algum objeto selecionado e se o objeto selecionado não é o primeiro filho
  if ((document.querySelectorAll('.selecionado').length !== 0) && (selecionado !== primeiroFilho)) {
    listaTarefas.insertBefore(selecionado, selecionado.previousElementSibling);
  }
});

// Botão que move alguns item para baixo
botaoMoverBaixo.addEventListener('click', function () {
  const selecionado = document.querySelector('.selecionado');
  const ultimoFilho = listaTarefas.lastElementChild;

  // Testa se existe algum objeto selecionado e se o objeto selecionado não é o último filho
  if ((document.querySelectorAll('.selecionado').length !== 0) && (selecionado !== ultimoFilho)) {
    listaTarefas.insertBefore(selecionado, selecionado.nextElementSibling.nextElementSibling);
  }
});

// Botão que remove tarefas já realizadas
botaoRemoverFinalizados.addEventListener('click', function () {
  for (let i = (listaTarefas.childElementCount - 1); i >= 0; i -= 1) {
    if (listaTarefas.children[i].classList.contains('completed')) {
      listaTarefas.removeChild(listaTarefas.children[i]);
    }
  }
});

// Botão que apaga todas as tarefas
botaoApagaTudo.addEventListener('click', function () {
  for (let i = 0; listaTarefas.childElementCount !== 0; i += 1) {
    listaTarefas.removeChild(listaTarefas.children[0]);
  }
});

// Botão que marca as tarefas como completadas
listaTarefas.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Botão que adiciona tarefa
botaoCriaTarefa.addEventListener('click', function () {
  if (textoTarefa.value !== '') {
    const listaItem = document.createElement('li');
    listaItem.className = ('texto-lista');
    listaItem.innerText = textoTarefa.value;
    listaTarefas.appendChild(listaItem);

    textoTarefa.value = '';
  }
});

// Botao que seleciona algum item
listaTarefas.addEventListener('click', function (event) {
  // Esse if testa se já existe a classe 'selecionado'. Se não houver nenhum
  // elemento selecionado essa classe não existe, logo não pode ser apagada
  if (document.querySelector('.selecionado') !== null) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
});
