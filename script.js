const lista = document.querySelector('#lista-tarefas');
const criaItem = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');
const moveParaBaixo = document.querySelector('#mover-baixo');
const moverParaCima = document.querySelector('#mover-cima');
const removerSelecionado = document.querySelector('#remover-selecionado');
const salvarLista = document.querySelector('#salvar-tarefas');

salvarLista.addEventListener('click', function () {
  const tamanhoLista = document.querySelectorAll('li');
  localStorage.setItem('listLength', `${tamanhoLista.length}`);
  for (let i = 0; i < tamanhoLista.length; i += 1) {
    localStorage.setItem(`item${i}`, `${tamanhoLista[i].innerText}`);
    localStorage.setItem(`class${i}`, `${tamanhoLista[i].className}`);
  }
});

moverParaCima.addEventListener('click', function () {
  const movido = document.querySelector('.selected');
  if (movido !== null) {
    if (movido.previousElementSibling === null) {
      alert('Você já está no primeiro item');
    } else {
      const cima = movido.previousElementSibling;
      cima.before(movido);
    }
  }
});

moveParaBaixo.addEventListener('click', function () {
  const movido = document.querySelector('.selected');
  if (movido !== null) {
    if (movido.nextElementSibling === null) {
      alert('Você já está no último item');
    } else {
      const baixo = movido.nextElementSibling;
      movido.before(baixo);
    }
  }
});

function selecionado() {
  const removerSelecao = document.querySelectorAll('li');
  for (let i = 0; i < removerSelecao.length; i += 1) {
    if (removerSelecao[i] === this) {
      this.classList.add('selected');
    } else {
      removerSelecao[i].classList.remove('selected');
    }
  }
}

function jaCompletado() {
  const verificaSelecao = event.target;
  let jaFoiConcluido = true;
  if (!verificaSelecao.classList.contains('completed')) {
    jaFoiConcluido = false;
  }
  return jaFoiConcluido;
}

function concluido() {
  const itemConcluido = jaCompletado();
  this.classList.remove('selected');
  if (!itemConcluido) {
    this.classList.add('completed');
  } else {
    this.classList.remove('completed');
  }
}

window.onload = function () {
  const listLength = localStorage.getItem('listLength');
  if (localStorage.length <= 1) {
    alert('preencha sua lista');
  } else {
    for (let j = 0; j < listLength; j += 1) {
      const itemNovo = document.createElement('li');
      itemNovo.innerText = localStorage.getItem(`item${j}`);
      itemNovo.className = localStorage.getItem(`class${j}`);
      itemNovo.addEventListener('dblclick', concluido);
      itemNovo.addEventListener('click', selecionado);
      lista.appendChild(itemNovo);
    }
  }
};

criaItem.addEventListener('click', function criaTarefa() {
  const itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  itemLista.addEventListener('dblclick', concluido);
  itemLista.addEventListener('click', selecionado);
  lista.appendChild(itemLista);
  textoTarefa.value = '';
});

apagarLista.addEventListener('click', function apagaLista() {
  const itensDaLista = document.querySelectorAll('li');
  for (let i = 0; i < itensDaLista.length; i += 1) {
    const remover = itensDaLista[i];
    lista.removeChild(remover);
  }
});

apagaFinalizados.addEventListener('click', function apagaConcluidos() {
  const concluidos = document.querySelectorAll('.completed');
  for (let j = 0; j < concluidos.length; j += 1) {
    const concluidoRemovido = concluidos[j];
    lista.removeChild(concluidoRemovido);
  }
});

removerSelecionado.addEventListener('click', function () {
  const selecionadoParaRemover = document.querySelector('.selected');
  lista.removeChild(selecionadoParaRemover);
});
