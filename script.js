
// Criar próxima tarefa

let botaoEntrada = document.getElementById("criar-tarefa");

botaoEntrada.addEventListener("click", function(){
  let tarefa = document.getElementById("texto-tarefa").value;   
  criarTarefas(tarefa,0);
  document.getElementById("texto-tarefa").value =""; //zerar o input
  
});

function criarTarefas(entrada,classe) {
  if (entrada != "") {

    
    let item = document.createElement("li");
    item.innerText = entrada;
    if(classe ==1){
      item.classList.add("completed");
    }
    let pai = document.getElementById("lista-tarefas");
    
    pai.appendChild(item);

    criarEventos();
    tarefasCompletas();
  }
};

// Marcando itens selecionados.

function criarEventos() {
  let lista = document.querySelectorAll("li");
  for (let i = 0; i < lista.length; i++) {
    (function (i) {
      lista[i].addEventListener("click", function () {
        let apagar = document.getElementsByClassName("selected");
        if (apagar[0] == null) {
          lista[i].classList.add("selected");
        } else {
          document
            .getElementsByClassName("selected")[0]
            .classList.remove("selected");
          lista[i].classList.add("selected");
        }
      });
    })(i);
  }
}

// MARCAR TAREFAS COMPLETAS

function tarefasCompletas() {
  let completos = document.querySelectorAll("li");
  let listaCompletos = [];
  for (let i = 0; i < completos.length; i++) {
    (function (i) {
      completos[i].addEventListener("dblclick", function () {
        if (listaCompletos[i] == 1) {
          completos[i].classList.remove("completed");
          listaCompletos[i] = 0;
        } else {
          completos[i].classList.add("completed");
          listaCompletos[i] = 1;
        }
      });
    })(i);
  }
}

// APAGAR TUDO
let pai = document.getElementById("lista-tarefas");
let apagar = document.getElementById("apaga-tudo");
apagar.addEventListener("click", function () {
  pai.innerHTML = "";
});

// APAGAR FINALIZADOS

let apagarCompletos = document.getElementById("remover-finalizados");
apagarCompletos.addEventListener("click", function () {
  let pai = document.getElementById("lista-tarefas");
  let lista = document.querySelectorAll("li");

  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].classList.contains("completed") == true) {
      pai.removeChild(lista[i]);
      console.log("apagou finalizado");
    }
  }
});

// APAGAR SELECIONADO

let removerSelecionado = document.getElementById("remover-selecionado");
removerSelecionado.addEventListener("click", function () {
  let pai = document.getElementById("lista-tarefas");
  let lista = document.querySelector(".selected");
  pai.removeChild(lista);
});

//SALVAR LISTA EM LOCALSTORAGE

let salvar = document.getElementById("salvar-tarefas");
salvar.addEventListener("click", function () {
  let lista = document.querySelectorAll("li");
  localStorage.clear();
   
  
  localStorage.setItem("tamanho", lista.length);

  for (let i = 0; i < lista.length; i += 1) {
    
    if (lista[i].classList.contains("completed")){
      localStorage.setItem("c"+i, 1);
    } else{
      localStorage.setItem("c"+i, 0);
    }
    
    localStorage.setItem(i, lista[i].innerText);
    console.log(lista[i]);
  }
});

//CARREGAR LISTA DE LOCALSTORAGE
let tamanho = localStorage.getItem("tamanho");
console.log(tamanho)

for (let i = 0; i < tamanho; i += 1) {

  
  let tarefa = localStorage.getItem(i);
  let classe = localStorage.getItem("c"+i)
   console.log(tarefa)
  
  criarTarefas(tarefa,classe);
}

// MOVER PARA CIMA OU PARA BAIXO

let cima = document.getElementById("mover-cima");

cima.addEventListener("click", function () {
  let atual = document.querySelector(".selected");
  if (atual != null) {
    if (atual.previousElementSibling) {
      let anterior = atual.previousElementSibling;
      anterior.before(atual);
    }
  }
});

let baixo = document.getElementById("mover-baixo");

baixo.addEventListener("click", function () {
  let atual = document.querySelector(".selected");
  if (atual != null) {
    if (atual.nextElementSibling) {
      let proximo = atual.nextElementSibling;
      atual.before(proximo);
    }
  }
});
