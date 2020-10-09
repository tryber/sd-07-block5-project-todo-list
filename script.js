const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');
const deletarTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefa = document.getElementById('salvar-tarefas');
const removerSelecionado = document.getElementById('remover-selecionado');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');

criarTarefa.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = textoTarefa.value;
  listaTarefas.appendChild(li);
  textoTarefa.value = '';
});

listaTarefas.addEventListener('click', (event) => {
  if (event.target !== listaTarefas) {
    const clearSelecionado = () => {
      const items = document.querySelectorAll('#lista-tarefas li');
      for (let index = 0; index < items.length; index += 1) {
        items[index].classList.remove('selecionado');
      }
    }
    const addSelecionado = (target) => target.classList.add('selecionado');
    clearSelecionado();
    addSelecionado(event.target);
  }
});

listaTarefas.addEventListener('dblclick', (event) => {
  if (event.target !== listaTarefas) {
    const addCompleted = (target) => target.classList.toggle('completed');
    addCompleted(event.target);
  }
});

deletarTudo.addEventListener('click', () => listaTarefas.innerHTML = '');

removerFinalizados.addEventListener('click', () => {
  const selectedCompleted = listaTarefas.querySelectorAll('.completed');
  for (let index = 0; index < selectedCompleted.length; index += 1) {
    listaTarefas.removeChild(selectedCompleted[index]);
  }
});

removerSelecionado.addEventListener('click', () => {
  const itemSelecionado = listaTarefas.querySelectorAll('.selecionado');
  for (let index = 0; index < itemSelecionado.length; index += 1) {
    listaTarefas.removeChild(itemSelecionado[index]);
  }
});

salvarTarefa.addEventListener('click', () => {
  const tarefas = listaTarefas.innerHTML;
  localStorage.setItem('tasks', tarefas);
})

window.onload = function () {
  importarTarefas();
};

function importarTarefas() {
  const loadedTasks = localStorage.getItem('tasks');
  listaTarefas.innerHTML = loadedTasks;
}
