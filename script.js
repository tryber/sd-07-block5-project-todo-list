function criarLista() {
    const tarefas = document.querySelector('.tarefas');
    const listaItem = document.createElement('ol');
    listaItem.id = 'lista-tarefas';
    tarefas.appendChild(listaItem);
  }
  criarLista();
  const btnAdd = document.querySelector('#criar-tarefa');
  btnAdd.addEventListener('click', function () {
    const lista = document.querySelector('#lista-tarefas');
    const textoItem = document.querySelector('#texto-tarefa');
    const item = document.createElement('li');
    item.innerHTML = textoItem.value;
    textoItem.value = '';
    lista.appendChild(item);
  });
  
  
  const lista = document.querySelector('#lista-tarefas');
  lista.addEventListener('click', function (event) {
    const elementoSelecionado = document.querySelector('.selected');
    const selected = event.target;
    if (elementoSelecionado) {
      elementoSelecionado.classList.remove('selected');
      selected.classList.add('selected');
    } else {
      selected.classList.add('selected');
    }
  });
  
  
  lista.addEventListener('dblclick', function () {
    const item = event.target;
    item.classList.toggle('completed');
  });
  
  
  const btnApagaTudo = document.querySelector('#apaga-tudo');
  btnApagaTudo.addEventListener('click', function () {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
  });
  
  
  const btnApagaFinalizados = document.querySelector('#remover-finalizados');
  btnApagaFinalizados.addEventListener('click', function () {
    const itens = document.querySelectorAll('.completed');
    if (itens) {
      for (let index = 0; index < itens.length; index += 1) {
        itens[index].remove();
      }
    }
  });
  
  const btnSalvar = document.querySelector('#salvar-tarefas');
  btnSalvar.addEventListener('click', function () {
    window.localStorage.setItem('minhaLista', lista.innerHTML);
  });
  
  function listaFoiSalva() {
    const listaSalva = window.localStorage.getItem('minhaLista');
    lista.innerHTML = listaSalva;
  }
  listaFoiSalva();
  
  const btnSelecao = document.querySelector('#remover-selecionado');
  btnSelecao.addEventListener('click', function () {
    const itemSelecionado = document.querySelector('.selected');
    if (itemSelecionado) {
      itemSelecionado.remove();
    }
  });
  
  const btnUp = document.querySelector('#mover-cima');
  btnUp.addEventListener('click', function () {
    const selecao = document.querySelector('.selected');
    if ((selecao) && (selecao.previousSibling)) {
      lista.insertBefore(selecao, selecao.previousSibling);
    }
  });
  
  const btnDown = document.querySelector('#mover-baixo');
  btnDown.addEventListener('click', function () {
    const selecao = document.querySelector('.selected');
    if ((selecao) && (selecao.nextSibling)) {
      lista.insertBefore(selecao, selecao.nextSibling.nextSibling);
    }
  });
  