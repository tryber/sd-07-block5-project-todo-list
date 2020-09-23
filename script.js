const botaoAdicionar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const itensLista = document.getElementsByClassName('selecionado');

botaoAdicionar.addEventListener('click', function () {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  const elementoLista = document.createElement('li');
  elementoLista.innerHTML = textoTarefa;
  elementoLista.classList.add('item');
  listaTarefas.appendChild(elementoLista);
  document.getElementById('texto-tarefa').value = '';
  elementoLista.addEventListener('click', function () {
    if (itensLista.length > 0) {
      for (let index = 0; index < itensLista.length; index += 1) {
        itensLista[index].classList.remove('selecionado');
      }
    }
    elementoLista.classList.add('selecionado');
  });
  elementoLista.addEventListener('dblclick', function () {
    elementoLista.classList.toggle('completed');
  });
});

const botaoLimpar = document.getElementById('apaga-tudo');

botaoLimpar.addEventListener('click', function () {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
});

const botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoRemoverFinalizados.addEventListener('click', function () {
  const item = document.querySelectorAll('.completed');
  for (let index = 0; index < item.length; index += 1) {
    item[index].remove();
  }
});

const botaoRemoverSelecionado = document.getElementById('remover-selecionado');

botaoRemoverSelecionado.addEventListener('click', function () {
  itensLista[0].remove();
});
