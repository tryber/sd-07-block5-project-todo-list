function check() {
  if (event.target.className === '') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function changeBgColor() {
  for (let checker = 0; checker < document.getElementsByTagName('li').length; checker += 1) {
    const actualTask = document.getElementsByTagName('li')[checker];
    if (actualTask.style.backgroundColor === 'rgb(128, 128, 128)') {
      actualTask.style.backgroundColor = '';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function createTask() {
  const task = document.getElementById('texto-tarefa').value;
  const newTask = document.createElement('li');
  newTask.addEventListener('click', changeBgColor);
  newTask.addEventListener('dblclick', check);
  newTask.innerText = task;
  document.getElementById('texto-tarefa').value = '';
  return document.getElementById('lista-tarefas').appendChild(newTask);
}

window.onload = function () {
  document.getElementById('criar-tarefa').addEventListener('click', createTask);
};
