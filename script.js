const listaTarefas = document.getElementById('lista-tarefas');
const buttonAddTarefa = document.getElementById('criar-tarefa');

buttonAddTarefa.addEventListener('click', function () {
  const itemLista = document.createElement('li');
  itemLista.innerText = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(itemLista);

  itemLista.addEventListener('click', function (event) {
    let selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
        } event.target.classList.add('selected');
    });

  itemLista.addEventListener('dblclick', function(event){
      if(event.target.classList.contains('completed')){
          event.target.classList.remove('completed');
      }
      else {
          event.target.classList.add('completed');
      }
  });
  document.getElementById('texto-tarefa').value = '';
});
// baseado em https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-6

const buttonClear = document.getElementById('apaga-tudo')
buttonClear.addEventListener('click', function () {
    let itemsList = document.querySelectorAll('li')

    for(let index = 0; index< itemsList.length; index += 1) {
    let item = itemsList[index];
    listaTarefas.removeChild(item);
    }
});

let buttonFinished = document.getElementById('remover-finalizados')
buttonFinished.addEventListener('click', function(){
    let checkList = document.getElementsByClassName('completed')
    for(let index = checkList.length -1; index >= 0; index -= 1) {
    let checkItem = checkList[index];
    listaTarefas.removeChild(checkItem);
    }
});