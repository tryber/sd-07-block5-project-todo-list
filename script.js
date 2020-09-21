let btCriarTarefa = document.getElementById('criar-tarefa');
let inpTextoTarefa = document.getElementById('texto-tarefa');
let olListaTarefa = document.getElementById('lista-tarefas');

btCriarTarefa.addEventListener('click', function () {
  // Testar de input tem conteudo
  // criar li
  // pegar o conteudo input e colocar o conteudo dentro da li
  // adicionar a li como filha da ol
  // apagar o conteudo do input
  // colocar o foco no input (legal)
  if (inpTextoTarefa.value !== '') {
    let liTag = document.createElement('li');

    liTag.innerText = inpTextoTarefa.value;
    // let text = document.createTextNode(inpTextoTarefa.value);
    // liTag.appendChild(text)

    olListaTarefa.appendChild(liTag);

    inpTextoTarefa.value = '';
  }
  inpTextoTarefa.focus();
});

olListaTarefa.addEventListener('click', function (event) {
  if (event.target.tagName == 'LI') {
    let todasAsLISelecionadas = document.querySelector('.selected');
    if (todasAsLISelecionadas != null) {
      todasAsLISelecionadas.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

olListaTarefa.addEventListener('dblclick', function (event) {
  // if (event.target.classList.contains('completed')) {
  //   event.target.classList.remove('completed');
  // } else {
  //   event.target.classList.add('completed');
  // }
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('completed');
  }
});

let btApagaTudo = document.getElementById('apaga-tudo');
let btRemoverFinalizados = document.getElementById('remover-finalizados');

btApagaTudo.addEventListener('click', function () {
  olListaTarefa.innerHTML = '';

  // let listaNova = document.querySelectorAll('ol > li')
  // for (let i = 0;  i < listaNova.length;i += 1){
  //   listaNova[i].remove();
  // }
});

btRemoverFinalizados.addEventListener('click', function () {
  let item = document.querySelectorAll('.completed');
  for (let i = 0; i < item.length; i += 1) {
    item[i].remove();
  }
});