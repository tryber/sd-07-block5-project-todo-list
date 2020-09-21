// Botão para adicionar uma nova tarefa
buttonCriarTarefa = document.getElementById("criar-tarefa");
buttonCriarTarefa.addEventListener("click", criarItem);

// Função que adiciona o item e limpa o input
function criarItem() {
    let inputTexto = document.getElementById("texto-tarefa");
    if (inputTexto.value != "") {
        let novoItem = document.createElement("li");
        novoItem.innerText = inputTexto.value;
        novoItem.addEventListener("click", selecionaItem); // Já cria o elemento com um Event Listener de seleção
        novoItem.addEventListener("dblclick", completaItem); // Já cria o elemento com um Event Listener para completar
        let listaTarefas = document.getElementById("lista-tarefas");
        listaTarefas.appendChild(novoItem);
        inputTexto.value = "";
    }
}

// Função que seleciona o item clicado
function selecionaItem() {
    let itemSelecionado = document.getElementById("selected");
    if (itemSelecionado == null) {
        this.setAttribute("id", "selected");
    } else {
        itemSelecionado.removeAttribute("id", "selected");
        this.setAttribute("id", "selected");
    }
}

let buttonLimpaSelecao = document.getElementById("limpa-selecao");
buttonLimpaSelecao.addEventListener("click", limpaSelecao);

// Função que tira a seleção de todos os itens
function limpaSelecao() {
    let itemSelecionado = document.getElementById("selected");
    if (itemSelecionado != null) {
        itemSelecionado.removeAttribute("id", "selected");
    }
}
// Função que marca como item completado
function completaItem() {
    if (this.classList[0] == "completed") {
        this.classList.remove("completed")
    } else {
        this.classList.add("completed");
    }
}

let buttonApagaTudo = document.getElementById("apaga-tudo");
buttonApagaTudo.addEventListener("click", apagaTudo);

// Função que limpa todos os itens
function apagaTudo() {
    let todosItems = document.getElementsByTagName("ol");
    // Utilizei o while que encontrei no link: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (todosItems[0].firstChild) {
        todosItems[0].removeChild(todosItems[0].lastChild);
    }
}

let buttonRemoverFinalizados = document.getElementById("remover-finalizados");
buttonRemoverFinalizados.addEventListener("click", removeFinalizados);

// Função que remove os finalizados
function removeFinalizados() {
    let itensFinalizados = document.getElementsByClassName("completed");
    while (itensFinalizados.length > 0) {
        itensFinalizados[0].remove();
    }   
}

let buttonRemoverSelecionado = document.getElementById("remover-selecionado");
buttonRemoverSelecionado.addEventListener("click", removeSelecionado);

// Função que remove o item selecionado
function removeSelecionado() {
    let itemSelecionado = document.getElementById("selected");
    if (itemSelecionado != null) {
        itemSelecionado.remove();
    }
}


// let botaoParaBaixo = document.getElementById("mover-baixo");
// botaoParaBaixo.addEventListener("click", moveParaBaixo);

// // Função que passa o item para baixo
// // Adaptado do link https://stackoverflow.com/questions/33325974/creating-a-task-list-with-pure-js-and-moving-items-up-and-down
// function moveParaBaixo() {
//     let listaDeItems = document.getElementsByTagName("ol")[0];
//     let itemSelecionado = document.getElementById("selected");
//     let proximoItem = itemSelecionado.nextSibling;
//     if (proximoItem != null) {
//         listaDeItems.insertBefore(proximoItem, itemSelecionado);
//     }
// }

// let botaoParaCima = document.getElementById("mover-cima");
// botaoParaCima.addEventListener("click", moveParaCima);

// // Função que passa o item para cima
// // Adaptado do link https://stackoverflow.com/questions/33325974/creating-a-task-list-with-pure-js-and-moving-items-up-and-down
// function moveParaCima() {
//     let listaDeItems = document.getElementsByTagName("ol")[0];
//     let itemSelecionado = document.getElementById("selected");
//     let itemAnterior = itemSelecionado.previousSibling;
//     if (itemAnterior != null) {
//         listaDeItems.insertBefore(itemSelecionado, itemAnterior);
//     }
// }