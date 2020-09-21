const createButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

createButton.addEventListener('click', function() {
    const newLine = document.createElement('li');
    list.appendChild(newLine);
    newLine.innerHTML = document.querySelector('input').value; // add nova tarefa
    document.querySelector('input').value = ''; // apaga texto do input
});

const deleteAllButton = document.getElementById('apaga-tudo');
deleteAllButton.addEventListener('click', function() {
    list.innerText = '';
});

// seleciona e pinta background cinza
list.addEventListener('click', function(event) {
    if (event.target.tagName == 'LI') {
        const lastSelectedElement = document.getElementsByClassName('selected');
        if (lastSelectedElement.length !== 0) { 
        lastSelectedElement[0].classList.remove('selected');
        }
        event.target.classList.add('selected');
    }
});

// marca como concluída - Refatorando 
list.addEventListener('dblclick', function(event) {
    if (event.target.tagName == 'LI') {
        if(event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            const completed = event.target;
            completed.classList.add('completed');
        }
    } // pode usar event.target.classList.toggle('completed') - remove ou add completed
});

// remove finaizados
const deleteCompleted = document.getElementById('remover-finalizados');
deleteCompleted.addEventListener('click', function() {
    while (document.querySelector('.completed')) { // remove só os completed
        document.querySelector('ol').removeChild(document.querySelector('.completed'));
    }
});

// remove selecionado
const deleteSelected = document.getElementById('remover-selecionado');
deleteSelected.addEventListener('click', function() {
    document.querySelector('ol').removeChild(document.querySelector('.selected'));
});