// Função para adicionar e tratar eventos
function adicionaEvento(novoItem) {
  novoItem.addEventListener('click', function () {
    const itensLista = document.getElementById('lista-tarefas').children;
    for (let index = 0; index < itensLista.length; index += 1) {
      itensLista[index].classList.remove('selected');
      itensLista[index].style.backgroundColor = '';
    }
    novoItem.classList.add('selected');
    novoItem.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  novoItem.addEventListener('dblclick', function () {
    novoItem.classList.remove('selected');
    if (novoItem.className === 'completed') {
      novoItem.classList.remove('completed');
      novoItem.style.textDecoration = '';
    } else {
      novoItem.classList.add('completed');
      novoItem.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}
// Função para inserir tarefa
const botaoAddTarefa = document.getElementById('criar-tarefa');
botaoAddTarefa.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novoItem = document.createElement('li');
  const itemTarefa = document.getElementById('lista-tarefas');
  itemTarefa.appendChild(novoItem).innerHTML = tarefa;
  document.getElementById('texto-tarefa').value = '';
  adicionaEvento(novoItem);
});
// Função para remover todos os itens da lista
const botaoLimpaLista = document.getElementById('apaga-tudo');
botaoLimpaLista.addEventListener('click', function () {
  const itemTarefa = document.getElementById('lista-tarefas');
  while (itemTarefa.firstChild) {
    itemTarefa.removeChild(itemTarefa.firstChild);
  }
});
// Função para remover finalizados
const removeCompleto = document.getElementById('remover-finalizados');
removeCompleto.addEventListener('click', function () {
  const list = document.querySelector('#lista-tarefas');
  while (document.querySelector('.completed')) {
    list.removeChild(document.querySelector('.completed'));
  }
});
// Função para remover selecionado
const removeSelecionado = document.getElementById('remover-selecionado');
removeSelecionado.addEventListener('click', function () {
  for (let index = 0; index < document.getElementById('lista-tarefas').children.length; index += 1) {
    const seleciona = document.getElementById('lista-tarefas').children;
    if (seleciona[index].classList.value === 'selected') {
      seleciona[index].remove();
    }
  }
});
