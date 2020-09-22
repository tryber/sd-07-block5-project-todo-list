let botao1 = document.querySelector('#criar-tarefa');
let caixaTexto = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');
let botao2 = document.querySelector('#apaga-tudo');

function criarTarefa() {
    let item = document.createElement('li');
    item.innerText = caixaTexto.value;
    item.className = "uncompleted";
    lista.appendChild(item);
    caixaTexto.value = '';
    item.addEventListener("click", function() {mudarCor(item);});
    //item.addEventListener("click", function() {tiraCor(item);});
    item.addEventListener("dblclick", function() {riscaItem(item);});
}

function mudarCor(item) {
    item.style.backgroundColor = "gray";
}

function tiraCor(item) {
    if(item.style.backgroundColor === "gray")  item.style.backgroundColor = "white";
}

function riscaItem(item) {
    if(item.className === "uncompleted") {
        item.className = "completed";
    }
    else {
        item.className = "uncompleted";
    } 
}

function apagarTudo() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

botao1.addEventListener("click", criarTarefa);
botao2.addEventListener("click", apagarTudo);