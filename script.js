const botaoSalvar = document.querySelector('#salvar-tarefas');
const criarTarefa = document.querySelector('#criar-tarefa');
const caixaTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const removerSelecionado = document.querySelector('#remover-selecionado');
const removerFinalizado = document.querySelector('#remover-finalizados');
const removerTudo = document.querySelector('#apaga-tudo');
const paraCima = document.querySelector('#mover-cima');
const paraBaixo = document.querySelector('#mover-baixo');
let itens = document.querySelectorAll('li');

function novoItemClick(novoItem) {
  novoItem.addEventListener('click', () => {
    if (!novoItem.classList.contains('selected')) {
      itens.forEach((item) => {
        item.classList.remove('selected');
      });
      novoItem.classList.add('selected');
    }
  });
}

function novoItemDoubleClick(novoItem) {
  novoItem.addEventListener('dblclick', () => {
    if (novoItem.classList.contains('completed')) {
      novoItem.classList.remove('completed');
    } else {
      novoItem.classList.add('completed');
    }
  });
}

function novoItemLista(texto) {
  const novoItem = document.createElement('li');
  const textoParaLista = document.createTextNode(texto);

  novoItem.appendChild(textoParaLista);
  lista.appendChild(novoItem);
  itens = document.querySelectorAll('li');

  novoItemClick(novoItem);
  novoItemDoubleClick(novoItem);
}

window.addEventListener('load', () => {
  if (localStorage.getItem('listagem') !== null) {
    lista.innerHTML = localStorage.getItem('listagem');
    itens = document.querySelectorAll('li');

    itens.forEach((item) => {
      novoItemClick(item);
      novoItemDoubleClick(item);
    });
  }
});

criarTarefa.addEventListener('click', () => {
  novoItemLista(caixaTexto.value);
  caixaTexto.value = '';
});

botaoSalvar.addEventListener('click', () => {
  localStorage.setItem('listagem', lista.innerHTML);
});

removerSelecionado.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('selected')) {
      lista.removeChild(item);
    }
  });
});

removerFinalizado.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('completed')) {
      lista.removeChild(item);
    }
  });
});

removerTudo.addEventListener('click', () => {
  itens.forEach((item) => {
    lista.removeChild(item);
  });
});

paraCima.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('selected')) {
      const parentes = item.parentNode;
      const acima = item.previousElementSibling;
      if (acima != null) {
        parentes.insertBefore(item, acima);
      }
    }
  });
});

paraBaixo.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('selected')) {
      const parentes = item.parentNode;
      const abaixo = item.nextElementSibling;
      if (abaixo != null) {
        parentes.insertBefore(abaixo, item);
      }
    }
  });
});
