const listaOrdenada = document.querySelector("#lista-tarefas");
const botaoAdicionar = document.querySelector("#criar-tarefa");
const campoTexto = document.querySelector("#texto-tarefa");
const botaoApaga = document.querySelector("#apaga-tudo");
const storage = document.querySelector("#salvar-tarefa");
const lista = document.querySelector("#lista");
const cima = document.querySelector("#mover-cima");
const baixo = document.querySelector("#mover-baixo");
let armazena = window.localStorage;
let botaoRemoveFinalizados = document.querySelectorAll(".completed");
let remove = document.querySelector("#remover-finalizados");

// Botão adiciona tarefa
botaoAdicionar.addEventListener("click", function () {
  let itemTarefa = document.createElement("li");
  itemTarefa.innerText = campoTexto.value;
  itemTarefa.className = "tarefa";
  listaOrdenada.appendChild(itemTarefa);
  campoTexto.value = "";
  campoTexto.focus();

  // Adiciona e remove seleção
  itemTarefa.addEventListener("click", function () {
    let selecionado = document.querySelector(".selecao");
    if (selecionado !== null) {
      selecionado.classList.remove("selecao");
    }
    itemTarefa.classList.add("selecao");
    itemTarefa.addEventListener("click", function () {
      itemTarefa.classList.remove("selecao");
    });
  });
});

// Tarefa completa
listaOrdenada.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Botão remove tarefas completas
remove.addEventListener("click", function () {
  let itensLista = document.querySelectorAll(".tarefa");
  for (let indiceItensLista = 0; indiceItensLista < itensLista.length; indiceItensLista += 1) {
    if (itensLista[indiceItensLista].classList.contains("completed")) {
      listaOrdenada.removeChild(itensLista[indiceItensLista]);
    }
  }
});

// Botão apaga lista de tarefas
botaoApaga.addEventListener("click", function () {
  listaOrdenada.innerHTML = "";
});
