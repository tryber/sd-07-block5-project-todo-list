const buttonAddTarefa = document.querySelector('#criar-tarefa');
const buttonDeletaTarefas = document.querySelector('#apaga-tudo');
const buttonDeletaTarefasConcluidas = document.querySelector('#remover-finalizados');

function finishItem(object) {
  const tarefa = object.target;
  tarefa.classList.toggle('completed');
  tarefa.classList.toggle('selected');
}

function selectItem(object) {
  const listTarefa = document.querySelectorAll('.item');
  const tarefa = object.target;
  for (let i = 0; i < listTarefa.length; i += 1) {
    if (listTarefa[i].classList.length > 1) {
      listTarefa[i].classList.remove('selected');
    }
  }
  tarefa.classList.add('selected');
}

buttonDeletaTarefasConcluidas.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('.completed');
  const listTarefa = document.querySelector('#lista-tarefas');
  for (let i = 0; i < tarefas.length; i += 1) {
    listTarefa.removeChild(tarefas[i]);
  }
});

buttonDeletaTarefas.addEventListener('click', () => {
  const tarefas = document.querySelectorAll('.item');
  const listTarefa = document.querySelector('#lista-tarefas');
  for (let i = 0; i < tarefas.length; i += 1) {
    listTarefa.removeChild(tarefas[i]);
  }
  return this;
});

buttonAddTarefa.addEventListener('click', () => {
  const listTarefa = document.querySelector('#lista-tarefas');
  const textoTarefa = document.querySelector('#texto-tarefa');
  if (textoTarefa.value === '') {
    return alert('Você não pode inserir uma tarefa sem nome :(');
  }
  const tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.classList = 'item';
  tarefa.addEventListener('click', (object) => selectItem(object));
  tarefa.addEventListener('dblclick', (object) => finishItem(object));
  listTarefa.appendChild(tarefa);
  textoTarefa.value = '';
  return this;
});
