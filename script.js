let textoTarefa = document.getElementById('texto-tarefa');
const botaoCriaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoMoverBaixo = document.getElementById('mover-baixo');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoRemoverSelecionado = document.getElementById('remover-selecionado');

botaoRemoverSelecionado.addEventListener('click', function () {
    if (document.querySelectorAll('.selecionado').length !== 0) {
      listaTarefas.removeChild(document.querySelector('.selecionado'));
    }
  });

  botaoMoverCima.addEventListener('click', function () {
    const selecionado = document.querySelector('.selecionado');
    const primeiroFilho = listaTarefas.firstChild.nextSibling;
  
    if ((document.querySelectorAll('.selecionado').length !== 0) && (selecionado !== primeiroFilho)) {
      const irmaoMaisVelho = selecionado.previousElementSibling;

      const irmaoMaisNovo = selecionado;
      listaTarefas.replaceChild(irmaoMaisVelho, selecionado);

      console.log(selecionado);
    console.log(selecionado.previousElementSibling);
    console.log(irmaoMaisNovo);
    console.log(irmaoMaisVelho);

     console.log(listaTarefas);
    }
    else {
      console.log('luciano');
    }
  });
  botaoMoverBaixo.addEventListener('click', function () {
    if (document.querySelectorAll('.selecionado').length !== 0) {
    }
});  

botaoRemoverFinalizados.addEventListener('click', function () {
    for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
      if (listaTarefas.children[i].classList.contains('completed')) {
        listaTarefas.removeChild(listaTarefas.children[i])
        listaTarefas.removeChild(listaTarefas.children[i]);
      }
    }
  });

  botaoApagaTudo.addEventListener('click', function () {
    for (let i = 0; listaTarefas.childElementCount !== 0; i += 1) {
      listaTarefas.removeChild(listaTarefas.children[0]);
    }
  });

  listaTarefas.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');

    } else {
        event.target.classList.add('completed');
      }
    });

    botaoCriaTarefa.addEventListener('click', function () {
        if (textoTarefa.value !== '') {
          const listaItem = document.createElement('li');
          listaItem.className = ('texto-lista');
          listaItem.innerText = textoTarefa.value;
          listaTarefas.appendChild(listaItem);
          textoTarefa.value = '';
        }
      });

      listaTarefas.addEventListener('click', function (event) {

  if (document.querySelector('.selecionado') !== null) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  event.target.classList.add('selecionado');
});      

//auxilio de fabiano berchon