// 5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
// As seguintes verificações serão feitas:

//     Será verificada a existência de um elemento do tipo button com o id criar-tarefa
//     No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
//     A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

let criartarefa = document.getElementById("criar-tarefa");
let listatarefa = document.getElementById("lista-tarefas");
let textotarefa = document.getElementById("texto-tarefa");
let clearall    = document.getElementById("apaga-tudo");
let finalizados = document.getElementById("remover-finalizados");
let save        = document.getElementById("salvar-tarefas");
let selecionado = document.getElementById("remover-selecionado");
let cima        = document.getElementById("mover-cima");
let baixo       = document.getElementById("mover-baixo");

listatarefa.innerHTML = localStorage.getItem("itens");

criartarefa.addEventListener("click", function() {

    let divNova = document.createElement("li");
    conteudoNovo = document.createTextNode(textotarefa.value);
    divNova.appendChild(conteudoNovo);
    listatarefa.appendChild(divNova);
    textotarefa.value="";
});

listatarefa.addEventListener("click",function(e) {

    let elements = document.querySelector("#lista-tarefas").children;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }

    let element = document.querySelector("#lista-tarefas");
    e.target.style.backgroundColor = "rgb(128, 128, 128)";
});

listatarefa.addEventListener("dblclick", function(e2) {
    let element = document.querySelectorAll("#lista-tarefas");
    if (e2.target.className == "completed") {
        e2.target.className = "";
    } else if (e2.target.className == "") {
        e2.target.className = "completed";
    }
});

clearall.addEventListener("click",function() {
    let element = document.getElementById("lista-tarefas");
    element.innerHTML = "";
});

finalizados.addEventListener("click",function() {
    let element = document.getElementById("lista-tarefas");
    for (let i = element.children.length - 1;i >= 0; i--) {
        if (element.children[i].className == "completed") {
            element.removeChild(element.children[i]);
        };
    }
});

save.addEventListener("click",function() {
    localStorage.setItem("itens",listatarefa.innerHTML);
});

selecionado.addEventListener("click",function() {
    let element = document.getElementById("lista-tarefas");
    for (let i = element.children.length - 1;i >= 0; i--) {
        if (element.children[i].style.backgroundColor == "rgb(128, 128, 128)") {
            element.removeChild(element.children[i]);
        };
    }
});

cima.addEventListener("click",function() {
    let element = document.getElementById("lista-tarefas");
    let position = 0;
    if (element.children.length >=2 ){
        for (let i = element.children.length - 1;i >= 0; i--) {
            if (element.children[i].style.backgroundColor == "rgb(128, 128, 128)") {
                position = i;
            };
        }
        if (position > 0) {
            element.insertBefore(element.children[position],element.children[position-1]);
        }
    }
})

baixo.addEventListener("click",function() {
    let element = document.getElementById("lista-tarefas");
    let position = element.children.length;
    if (element.children.length >=2 ){
        for (let i = element.children.length - 1;i >= 0; i--) {
            if (element.children[i].style.backgroundColor == "rgb(128, 128, 128)") {
                position = i+1;
            };
        }
        console.log(position);

        if (position < element.children.length) {
            element.insertBefore(element.children[position],element.children[position-1]);
        }
    }
})