var texto = document.querySelector("#texto-tarefa");
var lista = document.querySelector("#lista-tarefas");
var botao = document.querySelector("#criar-tarefa");
var apagar = document.querySelector("#apaga-tudo");

function criarLista() {

    if (texto.value != "") {
        let itensAFazer = document.createElement('li');
        itensAFazer.innerText = texto.value;

        lista.appendChild(itensAFazer);
        texto.value = "";
    }
}

function selecionar(target) {
    target.classList.add("selected");
}

function limparSelecionar() {
    var items = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < items.length; index += 1) {
        items[index].classList.remove("selected");
    }

}

function apagarLista() {
    lista.innerHTML = '';
}

botao.addEventListener('click', criarLista);
lista.addEventListener('click', function (e) {
    limparSelecionar();
    selecionar(e.target)
});
apagar.addEventListener('click', apagarLista);
