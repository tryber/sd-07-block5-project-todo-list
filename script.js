const buttonTarefas = document.getElementById('criar-tarefa');
const liTarefas = document.getElementById('lista-tarefas');
// Gerar TAREFAS na lista (item da lista)
function addTarefa() {
  const inputText = document.getElementById('texto-tarefa').value;
  const createListItem = document.createElement('li');
  createListItem.innerHTML = inputText;
  createListItem.className = 'list-item';
  liTarefas.appendChild(createListItem);
  document.getElementById('texto-tarefa').value = '';
}
buttonTarefas.addEventListener('click', addTarefa);



