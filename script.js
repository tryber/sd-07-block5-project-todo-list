let criarTarefa = document.getElementById('criar-tarefa');
let apagaTudo = document.getElementById('apaga-tudo');
let removerFinalizados = document.getElementById('remover-finalizados');

// window.onload = renderizarTodos (); 

function renderizarTodos (novoToDo) {
  let listaTarefas = document.getElementById('lista-tarefas');
  let itemLista = document.createElement('li');
  listaTarefas.appendChild(itemLista)
  .setAttribute('class', 'todo');
  itemLista.innerText = novoToDo;
  return itemLista;
};

criarTarefa.addEventListener('click', function () {
  let campoToDo = document.querySelector('input');
  let outroToDo = campoToDo.value;
  campoToDo.value = '';
  let itemLista = renderizarTodos(outroToDo);
  
  itemLista.addEventListener('click', function () {
    let toDos = document.getElementById('lista-tarefas').children;
    for (let toDo of toDos) {
      toDo.classList.remove('selected');
    }  
    itemLista.classList.add('selected');
  });
  
  itemLista.addEventListener('dblclick', function () {
    if (!itemLista.classList.contains('completed')) {
      itemLista.classList.add('completed');
    }else {
      itemLista.classList.remove('completed');
    }
  });
});

apagaTudo.addEventListener('click', function (){
  let listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.innerHTML = '';
})

removerFinalizados.addEventListener('click', function () {
  let itemLista = document.querySelectorAll('.completed');
  for (let item of itemLista){
    item.remove();
  }
})









