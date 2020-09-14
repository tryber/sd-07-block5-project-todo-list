const textoTarefa = document.getElementById('texto-tarefa');
const salvar = document.getElementById('criar-tarefa');

function limparTexto() {
  textoTarefa.value = '';
}

function descelecionarItem() {
  document.querySelectorAll('li').forEach((item) => {
    item.classList.remove('backgroundItemList');
    item.classList.remove('selecionado');
  });
}

function selecionarItem() {
  document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', () => {
      descelecionarItem();
      item.classList.add('backgroundItemList');
      item.classList.add('selecionado');
    });
    item.addEventListener('dblclick', () => {
      item.classList.add('completed');
      item.addEventListener('dblclick', () => {
        item.classList.remove('completed');
      });
    });
  });
}

function salvarLista() {
  const itemArray = [];
  document.querySelectorAll('li').forEach((item) => {
    itemArray.push({ item: item.innerHTML, class: item.className });
    localStorage.setItem('item-list', JSON.stringify(itemArray));
  });
}

function criarTarefa() {
  if (textoTarefa.value === '') {
    return;
  }
  const lista = document.getElementById('lista-tarefas');
  const novoItem = document.createElement('li');
  novoItem.innerText = textoTarefa.value;
  lista.appendChild(novoItem);
  limparTexto();
  selecionarItem();
}

salvar.addEventListener('click', criarTarefa);

document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.querySelectorAll('li').forEach((item) => {
    item.remove();
    localStorage.clear();
  });
});

document.getElementById('remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((item) => {
    item.remove();
  });
  if (document.querySelector('li') === null) {
    localStorage.clear();
  }
  salvarLista();
});

document.getElementById('remover-selecionado').addEventListener('click', () => {
  document.querySelectorAll('.selecionado').forEach((item) => {
    item.remove();
  });
  if (document.querySelector('li') === null) {
    localStorage.clear();
  }
  salvarLista();
});

document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);

// Site usado como referencia
// https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
function reconstruir() {
  if (localStorage.getItem('item-list') !== null) {
    const itemArray = JSON.parse(localStorage.getItem('item-list'));
    itemArray.forEach((item) => {
      const lista = document.getElementById('lista-tarefas');
      const novoItem = document.createElement('li');
      novoItem.innerText = item.item;
      novoItem.className = item.class;
      lista.appendChild(novoItem);
    });
  }
  selecionarItem();
}
// <-------------------------------------------------------------------->
reconstruir();

function descerItem() {
  if (document.querySelector('.selecionado') === null) {
    return;
  }
  const posicao = document.querySelector('.selecionado').nextSibling;
  const selecionado = document.querySelector('.selecionado');
  const pai = document.querySelector('.selecionado').parentNode;
  if (selecionado === pai.lastChild) {
    return;
  }
  pai.insertBefore(posicao, selecionado);
}

function subirItem() {
  if (document.querySelector('.selecionado') === null) {
    return;
  }
  const posicao = document.querySelector('.selecionado').previousSibling;
  const selecionado = document.querySelector('.selecionado');
  const pai = document.querySelector('.selecionado').parentNode;
  if (selecionado === pai.firstChild) {
    return;
  }
  pai.insertBefore(selecionado, posicao);
}

document.getElementById('mover-cima').addEventListener('click', () => {
  subirItem();
});

document.getElementById('mover-baixo').addEventListener('click', () => {
  descerItem();
});
