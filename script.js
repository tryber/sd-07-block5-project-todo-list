
const listaTarefas = document.querySelector('#lista-tarefas');
const criarTarefaBtn = document.querySelector('#criar-tarefa');
const apagarTudoBtn = document.querySelector('#apaga-tudo');
const apagarFinalizadosBtn = document.querySelector('#remover-finalizados');
const removerSelecionadoBtn = document.querySelector('#remover-selecionado');
let itemSelect = '';
let paiLista = '';
let finalizados = '';
function criarLi() {
  criarTarefaBtn.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = document.querySelector('#texto-tarefa').value;
    li.addEventListener('click', function () {
      itemSelect = document.querySelector('.selected');
      if (itemSelect != null) {
        itemSelect.classList.remove('selected');
      }
      li.classList.add('selected');
      itemSelect = li;
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    li.addEventListener('dblclick', function () {
      if (li.classList.contains('completed')) {
        li.classList.remove('completed');
      } else {
        li.classList.add('completed');
      }
    });
    listaTarefas.appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
  });
}
function apagarLi() {
  paiLista = document.querySelector('li').parentElement;
  while (paiLista.hasChildNodes()) {
    paiLista.removeChild(paiLista.childNodes[0]);
  }
}
apagarTudoBtn.addEventListener('click', apagarLi);
function apagarFinalizados() {
  finalizados = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    finalizados[i].remove();
  }
}
apagarFinalizadosBtn.addEventListener('click', apagarFinalizados);
function removerSelecionado() {
  itemSelect = document.querySelector('.selected');
  itemSelect.remove();
}
removerSelecionadoBtn.addEventListener('click', removerSelecionado);
criarLi();