let botaoCriarTarefa = document.getElementById("criar-tarefa");
let botaoApagaTudo = document.getElementById("apaga-tudo"); 
let botaoRemoverFinalizados = document.getElementById("remover-finalizados");
let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
let botaoRemoverSelecionados = document.getElementById("remover-selecionado");
let botaoMoverCima = document.getElementById("mover-cima");
let botaoMoverBaixo = document.getElementById("mover-baixo");
let inputTarefa = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let selecao = document.querySelector(".selecionado");
let completed = document.querySelector(".completed");



function selecaoTarefa(event) {
    if (selecao !== null) {
        selecao.classList.remove("selecionado");
        event.target.classList.add("selecionado");
        selecao = event.target;
    } else {
        event.target.classList.add("selecionado");
        selecao = event.target;
    }
}

function tarefaCompleta(event){
    if (event.target.classList.contains("completed")){
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    }
}

function criarTarefa() { 
    let tarefa = document.createElement("li");
    tarefa.innerText = inputTarefa.value;
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = null;    
    tarefa.addEventListener('dblclick', tarefaCompleta);
    tarefa.addEventListener('click', selecaoTarefa);
}

function apagaTudo() {
    let listaTarefasApagar = listaTarefas.querySelectorAll("li");
    for (let index = 0; index < listaTarefasApagar.length; index++) {
        listaTarefas.removeChild(listaTarefasApagar[index]);
    }
}
function removerFinalizados() {

}
function checarTarefasSalvas()
{
    if (localStorage.length > 0){
        taskList.innerHTML = localStorage.getItem('tarefasSalvas');
        console.log(listaTarefas);
        let listaTarefas2 = listaTarefas.querySelector('li');
        listaTarefas2.forEach((tarefa1) => {
            tarefa1.addEventListener('dblclick', tarefaCompleta);
            tarefa1.addEventListener('click', selecaoTarefa);
        });
    }
}
checarTarefasSalvas();

function salvarTarefas() {
    localStorage.setItem('tarefasSalvas', listaTarefas.innerHTML);
}
function removeSelecionados(){
    listaTarefas.removeChild(selecao);
}
function removeFinalizados(){
    let listaTarefas2 = listaTarefas.querySelectorAll('li');
    for (i=0; i < listaTarefas2.length; i++){
        if (listaTarefas2[i].classList.contains('completed')){
            listaTarefas.removeChild(listaTarefas2[i]);
        }
    }
}
function moverCima(){
    let selecionado = document.querySelector('.selecionado');
    let primeiroFilho = listaTarefas.firstElementChild;
    if ((document.querySelectorAll('.selecionado').length !== 0) && (selecionado !== primeiroFilho)){
        listaTarefas.insertBefore(selecionado, selecionado.previousElementSibling);
    }
}
function moverBaixo(){
    let selecionado = document.querySelector('.selecionado');
    let ultimoFilho = listaTarefas.lastElementChild;
    if ((document.querySelectorAll('.selecionado').length !== 0) && (selecionado !== ultimoFilho)){
        listaTarefas.insertBefore(selecionado, selecionado.nextElementSibling.nextElementSibling);
    }
}