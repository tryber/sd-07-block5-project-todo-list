let buttonCriarTarefa = document.getElementById('criar-tarefa');
let inputTextoTarefa = document.getElementById('texto-tarefa');
let olListaTarefas = document.getElementById('lista-tarefas');

buttonCriarTarefa.addEventListener('click', function () {
  let itemList = document.createElement('li');
  itemList.innerText = inputTextoTarefa.value;
  olListaTarefas.appendChild(itemList);
  inputTextoTarefa.value = '';
  inputTextoTarefa.focus();
});

olListaTarefas.addEventListener('click', function (event) {
  if (event.target.tagName == 'LI') {
    let liSelected = document.querySelector('.selected');
    if (liSelected !== null) {
      liSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

olListaTarefas.addEventListener('dblclick', function (event) {
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('completed');
  }
});

let buttonApagaTudo = document.getElementById('apaga-tudo');
let buttonRemoveFinalizados = document.getElementById('remover-finalizados');

buttonApagaTudo.addEventListener('click', function () {
  olListaTarefas.innerHTML = '';
});

buttonRemoveFinalizados.addEventListener('click', function () {
  let removeFinalizados = document.querySelectorAll('.completed');
  for (index = 0; index < removeFinalizados.length; index += 1) {
    removeFinalizados[index].remove();
  }
});
