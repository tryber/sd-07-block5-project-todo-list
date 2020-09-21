let btCriarTarefa = document.getElementById('criar-tarefa');
let inputTextoTarefa = document.getElementById('texto-tarefa');
let olListaTarefa = document.getElementById('lista-tarefas');
let btApagarTudo = document.getElementById('apaga-tudo');
let btRemoverFinalizados = document.getElementById('remover-finalizados');

btCriarTarefa.addEventListener('click', function () {
  if (inputTextoTarefa.value) {
    let liTag = document.createElement('li');
    liTag.innerText = inputTextoTarefa.value;
    olListaTarefa.appendChild(liTag);
    inputTextoTarefa.value = '';
  }
  inputTextoTarefa.focus();
});

olListaTarefa.addEventListener('click', function (event) {
  if (event.target.tagName !== 'OL') {
    let liSelected = document.querySelector('.selected');
    if (liSelected) {
      liSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

olListaTarefa.addEventListener('dblclick', function (event) {
  if (event.target.tagName !== 'OL') {
    event.target.classList.toggle('completed');
  }
});
btApagarTudo.addEventListener('click', function () {
    olListaTarefa.innerHTML = ''
});

btRemoverFinalizados.addEventListener('click', function(){
  let item = document.getElementsByClassName('completed');  
  for (i = (item.length -1); i >= 0; i -= 1){
    item[i].remove()
  }
})