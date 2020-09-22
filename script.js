let buttonForTask = document.getElementById('criar-tarefa');
let inputTextTask = document.getElementById('texto-tarefa');
let olListTask = document.getElementById('lista-tarefas');

buttonForTask.addEventListener('click', function(){
    let liOne = document.createElement('li');
     liOne.innerText = inputTextTask.value
     olListTask.appendChild(liOne);
     inputTextTask.value = '';
})