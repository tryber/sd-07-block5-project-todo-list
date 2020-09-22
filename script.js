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

// Gerar background-color
liTarefas.addEventListener('click', function (event) {
    const removeClass = document.querySelector('.selected');
    if (removeClass !== null) {
      removeClass.classList.remove('selected');
    }
    const selectClass = event.target;
    selectClass.className += ' selected';
  });

  // Remove tudo
const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', function () {
  while (liTarefas.firstChild) {
    liTarefas.removeChild(liTarefas.firstChild);
  }
});
