const textoTarefa = document.getElementById('texto-tarefa');
const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const arrayListaComTodasTarefas = [];

// Adicionando itens na lista, apagando o campo de preenchimento
botaoCriarTarefa.addEventListener('click', function () {
  if (textoTarefa.value) {
    let itemParaAdicionar = document.createElement('li');
    itemParaAdicionar.classList.add('lista');
    itemParaAdicionar.innerText = textoTarefa.value;
    arrayListaComTodasTarefas.push(itemParaAdicionar.innerText);
    listaTarefas.appendChild(itemParaAdicionar);
    textoTarefa.value = '';
    textoTarefa.focus();
  }
});

// Pintando intens da lista de cinza
listaTarefas.addEventListener('click', function (event) {
  let itemARemover = document.getElementsByClassName('selected')[0];
  if (itemARemover != null) {
    itemARemover.classList.remove('selected');
  }
  event.target.classList.add('selected');
});

// Riscando os itens
listaTarefas.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});

let btApagaTudo = document.getElementById('apaga-tudo');
let btRemoverFinalizados = document.getElementById('remover-finalizados');

btApagaTudo.addEventListener('click', function () {
  listaTarefas.innerHTML = '';
});
//Observar que querySelectorAll dá um node list e getElementsByClassName dá um HTML Colection. Para efeito de nó é melhor nodeList
btRemoverFinalizados.addEventListener('click', function () {
  let item = document.querySelectorAll('.completed');

  for (let index = 0; index < item.length; index += 1) {
    item[index].remove();
  }
});
