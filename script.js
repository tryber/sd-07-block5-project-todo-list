const buttonAdd = document.getElementById('criar-tarefa');
const textTask = document.getElementById('texto-tarefa');
const listTasks = document.getElementById('lista-tarefas');
const delButton = document.getElementById('apaga-tudo');
const finalized = document.getElementById('remover-finalizados');

function addingTask() {
  if (textTask.value !== '') {
    const task = document.createElement('li');
    task.innerText = textTask.value;
    listTasks.appendChild(task);
    textTask.value = '';
  }
}
buttonAdd.addEventListener('click', addingTask);

listTasks.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});

listTasks.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Delete all button
delButton.addEventListener('click', () => listTasks.innerHTML == '');

// Remover Finalizados
finalized.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((item) => {
    listTasks.removeChild(item);
  });
});


// Remover Selecionados
const removeButton = document.getElementById('remover-selecionado');

removeButton.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (!selectedItem) return;
  listTasks.removeChild(selectedItem);
});
