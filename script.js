const btnCriarTarefa = document.getElementById('criar-tarefa');
btnCriarTarefa.addEventListener('click', function () {
  const listaTarefas = document.getElementById('lista-tarefas');
  const itemLista = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa');
  itemLista.className = 'lista-li';
  itemLista.innerText = textoTarefa.value;
  listaTarefas.appendChild(itemLista);
  textoTarefa.value = '';
});

let listaLi = [];
const itemListaBG = document.getElementById('lista-tarefas');
itemListaBG.addEventListener('click', function (event) {
  if (event.target.classList.contains('lista-li')) {
    listaLi = document.getElementsByClassName('lista-li');
    for (let index = 0; index < listaLi.length; index += 1){
      listaLi[index].classList.remove('selected');
    }
    event.target.classList.toggle('selected');
  }
});

const itemListaSel = document.getElementById('lista-tarefas');
itemListaSel.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('lista-li')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.toggle('completed');
    }
  }
});
// source: https://www.w3schools.com/howto/howto_js_todolist.asp
// source: https://velhobit.com.br/tutoriais/como-selecionar-o-item-de-uma-tabela-html.html

const btnLimpaTudo = document.getElementById('apaga-tudo');
const lista = document.getElementById('lista-tarefas');
btnLimpaTudo.addEventListener('click', function () {
  lista.innerHTML = '';
});

const btnRemoveSel = document.getElementById('remover-finalizados');
const listSel = document.getElementById('lista-tarefas');
btnRemoveSel.addEventListener('click', function () {
  
});
