// Referenciar/trazer os valores do HTML para (=) o JavaScript
let btCriarTarefa = document.getElementById("criar-tarefa");
// Para receber o valor digitado no input
let inpTextoTarefa = document.getElementById("texto-tarefa");
let olListaTarefa = document.getElementById("lista-tarefas");

// Para receber a ação (click) e realizar a função de adicionar o valor do input à olListaTarefa
btCriarTarefa.addEventListener("click", function () {
    // Testar se há conteúdo no input
    if (inpTextoTarefa.value !== "") {
        // criar o li
        let itemList = document.createElement("li");
        // add o conteudo na li
        /* let text = document.createTextNode(inpTextoTarefa.value);
        liTag.appendChild(text); */
        itemList.innerText = inpTextoTarefa.value;
        // add a li como filha da ol
        olListaTarefa.appendChild(itemList);
        // apagar o conteudo do input
        inpTextoTarefa.value = "";
    }
    // *perfumaria* colocar o foco no input
    inpTextoTarefa.focus();
})

// criar escuta para add background
olListaTarefa.addEventListener("click", function(event) {
    // tagName referencia o nome da tag HTML
    if (event.target.tagName == "LI") {
        let todasAsLiSelecionadas = document.querySelector(".selected");

        if (todasAsLiSelecionadas != null) {
            // remover class select
            todasAsLiSelecionadas.classList.remove("selected");
        }
    
        // add class select onde for clicado
        event.target.classList.add("selected");
    }
    // estudar sobre toggle
})

// criar uma escuta para o doble click
olListaTarefa.addEventListener("dblclick", function(event) {
    // if (event.target.tagName == "LI") {
    //     // verificar se o item clicado tem ou nao a classe complited
    //     if (event.target.classList.contains("completed")) {
    //         // remover class complited
    //         todasAsLiSelecionadas.classList.remove("completed");
    //     } else {
    //         event.target.classList.add("completed");
    //     }
    // }
    if (event.target.tagName == "LI") {
        // refatorando o if acima
        event.target.classList.toggle("completed");
    }
})

let btApagaTudo = document.getElementById("apaga-tudo");
let btRemoverFinalizados = document.getElementById("remover-finalizados");

// escuta para o botão apaga-tudo
btApagaTudo.addEventListener("click", function () {
    // remove child
    let listaNova = document.querySelectorAll("li")
    for (let index = 0; index < listaNova.length; index += 1) {
        listaNova[index].remove();
    }
    // innerHTML = ""
    // olListaTarefa.innerHTML = "";
})

btRemoverFinalizados.addEventListener("click", function () {
    let item = document.querySelectorAll(".completed");
    for (let index =0; index <item.length; index += 1) {
        item[index].remove();
    }
})