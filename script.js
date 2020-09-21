let botaoAdicionarTarefa = document.getElementById('criar-tarefa');
let campoDeTexto = document.getElementById('texto-tarefa');
let listaDeTarefa = document.getElementById('lista-tarefas');
let botaoRemoverTarefa = document.getElementById('remover-finalizados');
let botaoApagarTudo = document.getElementById('apaga-tudo');

botaoAdicionarTarefa.addEventListener('click', function() {
    if (campoDeTexto.value !== '') {
        let itemDaLista = document.createElement('li');
        itemDaLista.innerHTML = campoDeTexto.value;
        itemDaLista.className = 'item'
        listaDeTarefa.appendChild(itemDaLista);
        campoDeTexto.value = '';
    }
    campoDeTexto.focus();
});

listaDeTarefa.addEventListener ('click', function (event) {
    if (event.target.className == 'item') {
    let todosItensSelecionados = document.querySelector('.selected-item');
        if (todosItensSelecionados !== null) {
            todosItensSelecionados.classList.remove('selected-item')
        }
        event.target.classList.add('selected-item');
    }
});

listaDeTarefa.addEventListener ('dblclick', function (event) {
   event.target.classList.toggle('completed');
});

botaoApagarTudo.addEventListener('click', function () {
    listaDeTarefa.innerHTML = '';
});

botaoRemoverTarefa.addEventListener('click', function () {
   let itensRemover = document.querySelectorAll('.completed');
   for (index = 0; index < itensRemover.length; index += 1) {
       itensRemover[index].remove();
   }
}); 