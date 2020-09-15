const CaixaTexto = document.getElementById('texto-tarefa');
const bot = document.getElementById('criar-tarefa');
const bota = document.getElementById('apaga-tudo');
const lista = document.getElementById('lista-tarefas');
const filhos = lista.children;
function apagar() {
  for (let index = 0; index < filhos.length; index += 1) {
    filhos[index].className = 'item';
  }
}
function atributo() {
  for (let NDA = 0; NDA < filhos.length; NDA += 1) {
    filhos[NDA].addEventListener('click', function () {
      apagar();
      event.target.className = 'slecionado';
    });
  }
}

function criarTarefa() {
  bot.addEventListener('click', function () {
    const texto = CaixaTexto.value;
    const item = document.createElement('li');
    item.innerText = texto;
    lista.appendChild(item);
    CaixaTexto.value = '';
    atributo();
  });
}

function apagarTarefa() {
  bota.addEventListener('click', function () {
    const vezes = filhos.length;
    for (let I = 0; I < vezes; I += 1) {
      lista.removeChild(filhos[0]);
    }
  });
}

window.onload = function () {
  criarTarefa();
  apagarTarefa();
};
