let input = document.querySelector('#texto-tarefa');
let buttonAdicionar = document.querySelector('#criar-tarefa');
let listaOrdenada = document.querySelector('#lista-tarefas');

function adicionaItemLista() {
  let itemLista = criaItemLista('item');
  listaOrdenada.appendChild(itemLista);
  itemLista.innerHTML = input.value;
  input.value = '';
}

function criaItemLista(className) {
  let itemLista = document.createElement('li');
  itemLista.className = className;
  return itemLista;
}

buttonAdicionar.addEventListener('click', adicionaItemLista);

//-------------------------------------------------------------------------------------------

document.addEventListener('click', function (event) {
  let items = document.querySelectorAll('.item');

  if (event.target.classList.contains('item')) {
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.style.backgroundColor = 'white';
    event.target.classList.remove('completed');
  } else if (event.target.classList.contains('item')) {
    event.target.style.backgroundColor = 'white';
    event.target.classList.add('completed');
  }
});

//--------------------------------------------------------------------------------------------------

let buttonApagarTudo = document.querySelector('#apaga-tudo');

function apagaItemsLista() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    listaOrdenada.removeChild(items[i]);
  }
}
buttonApagarTudo.addEventListener('click', apagaItemsLista);

let buttonApagarFinalizados = document.querySelector('#remover-finalizados');

function apagaFinalizado() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].classList.contains('completed')) {
      listaOrdenada.removeChild(items[i]);
    }
  }
}
buttonApagarFinalizados.addEventListener('click', apagaFinalizado);

//------------------------------------------------------------------------------------------------

let buttonSalvar = document.querySelector('#salvar-tarefas');

buttonSalvar.addEventListener('click', function () {
  localStorage.clear();
  localStorage.setItem('Itens-salvos', listaOrdenada.innerHTML);
});

window.onload = function () {
  listaOrdenada.innerHTML = localStorage.getItem('Itens-salvos');
};

//----------------------------------------------------------------------------------------------

let buttonMoverCima = document.querySelector('#mover-cima');

function moveCima() {
  let items = listaOrdenada.childNodes;

  for (let i = 0; i < items.length; i += 1) {
    if (items[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      if (items[i].previousElementSibling == null) {
        break;
      }

      let aux = items[i].previousElementSibling.innerHTML;
      items[i].previousElementSibling.innerHTML = items[i].innerHTML;
      items[i].innerHTML = aux;

      items[i].style.backgroundColor = 'white';
      items[i].previousElementSibling.style.backgroundColor =
        'rgb(128, 128, 128)';

      if (items[i].classList.contains('completed') == true) {
        items[i].previousElementSibling.classList.add('completed');
        items[i].classList.remove('completed');
      }
    }
  }
}
buttonMoverCima.addEventListener('click', moveCima);

let buttonMoverBaixo = document.querySelector('#mover-baixo');

function moveBaixo() {
  let items = listaOrdenada.childNodes;

  for (let i = items.length - 1; i >= 0; i -= 1) {
    if (items[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      if (items[i].nextElementSibling == null) {
        break;
      }

      let aux = items[i].nextElementSibling.innerHTML;
      items[i].nextElementSibling.innerHTML = items[i].innerHTML;
      items[i].innerHTML = aux;

      items[i].style.backgroundColor = 'white';
      items[i].nextElementSibling.style.backgroundColor = 'rgb(128, 128, 128)';

      if (items[i].classList.contains('completed') == true) {
        items[i].nextElementSibling.classList.add('completed');
        items[i].classList.remove('completed');
      }
    }
  }
}
buttonMoverBaixo.addEventListener('click', moveBaixo);

//-----------------------------------------------------------------------------------------------

let buttonApagarSelecionados = document.querySelector('#remover-selecionado');

function apagaSelecionado() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      listaOrdenada.removeChild(items[i]);
    }
  }
}
buttonApagarSelecionados.addEventListener('click', apagaSelecionado);
