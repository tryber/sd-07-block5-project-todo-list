const botaoSalvarLista = document.querySelector("#salvar-tarefas");
const botaoApagarLista = document.querySelector("#apaga-tudo");
const botaoRemoverSelecionado = document.querySelector("#remover-selecionado");
const botaoRemoverFinalizados = document.querySelector("#remover-finalizados");
const buttoncriarTarefa = document.querySelector("#criar-tarefa");
let textoTarefa = document.querySelector("#texto-tarefa");
var listOl = document.querySelector('ol');
let li = document.createElement('li');
let listaTarefas = document.querySelector("#lista-tarefas");

function InputTextField () {
    textoTarefa.addEventListener('keydown', () => {
        textoTarefa = document.querySelector("#texto-tarefa");
    })
}

let voltarListaSalva = localStorage.getItem("lista");
voltarListaSalva = voltarListaSalva.split(",");

function voltarLista (voltarListaSalva) {
    for (let i = 0; i < voltarListaSalva.length; i++) {
        let li = document.createElement('li');
        li.id ='list'
        li.innerHTML = voltarListaSalva[i];
        listaTarefas.appendChild(li);
    }
    textoTarefa.value = '';

}




function listTask () {
    buttoncriarTarefa.addEventListener('click', () => {
        listaTarefas = document.querySelector("#lista-tarefas");
        li = document.createElement('li');
        li.innerHTML = textoTarefa.value;
        listaTarefas.appendChild(li);
        textoTarefa.value = '';
        li.id ='list'
    })
}

function eventosDaLista () {
    listOl.addEventListener('dblclick', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
      }
    });
    listOl.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('selected');
        }
    });
}

/*
const botaoAcima = document.querySelector("#mover-cima");
botaoAcima.addEventListener('click', movimentarItemAcima);
function movimentarItemAcima () {
    const selecionado = document.querySelectorAll(".selected");
    for (let index = 0; index < selecionado.length; index += 1) {
    
    }
}
*/


botaoRemoverSelecionado.addEventListener('click', apagarSelecionado);
function apagarSelecionado () {
    const selecionado = document.querySelectorAll(".selected");
    for (let index = 0; index < selecionado.length; index += 1) {
        selecionado[index].remove();
    }
}

botaoApagarLista.addEventListener("click", apagarTudo);
function apagarTudo() {
    const todasLi = document.querySelector("#lista-tarefas");
    while (todasLi.firstChild) {
        todasLi.removeChild(todasLi.firstChild);
    }
}

botaoRemoverFinalizados.addEventListener('click', apagarFinalizados);
function apagarFinalizados () {
    const finalizados = document.querySelectorAll(".completed");
    for (let index = 0; index < finalizados.length; index += 1) {
        finalizados[index].remove();
    }    
}

botaoSalvarLista.addEventListener('click', salvarLista);
function salvarLista () {
    let listaParaSalvar = document.querySelectorAll('#list');
    let gravarLista = []
    for (let i = 0; i < listaParaSalvar.length; i++) {
        gravarLista.push(listaParaSalvar[i].textContent);
    }
    localStorage.setItem("lista", gravarLista);
}



window.onload = () => {
    InputTextField ()
    eventosDaLista ()
    listTask ()
    voltarLista (voltarListaSalva)
}