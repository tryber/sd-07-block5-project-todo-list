window.onload = function () {
  //Declarando variáveis
  let btnNewTask = document.getElementById("criar-tarefa");
  let btnClear = document.getElementById("apaga-tudo");
  let btnEnd = document.getElementById("remover-finalizados");
  let btnSave = document.getElementById("salvar-tarefas");
  let btnUp = document.getElementById("mover-cima");
  let btnDown = document.getElementById("mover-baixo");
  let removeSelected = document.getElementById("remover-selecionado");
  let listMother = document.getElementById("lista-tarefas");

  //Adicionando evento de colocar o input na lista
  btnNewTask.addEventListener("click", function () {
    let textInput = document.getElementById("texto-tarefa");
    let listMother = document.getElementById("lista-tarefas");
    let listChild = document.createElement("li");
    listMother.appendChild(listChild).innerText = textInput.value;
    textInput.value = "";
    let li = document.querySelectorAll("li");

    //Adicionando completed
    listChild.addEventListener("dblclick", function () {
      listChild.classList.toggle("completed");
    });

    //Evento do botão salvando as tarefas
    btnSave.addEventListener("click", function () {
      if (li.length === null) {
        localStorage.removeItem("saveList");
      }

      for (let index = 0; index < li.length; index += 1) {
        li[index].classList.remove("selected");
      }
      let saveList = document.getElementById("lista-tarefas").innerHTML;
      localStorage.setItem("saveList", saveList);
    });

    //Loop para adicionar ou remover class com bc cinza
    for (let listIndex = 0; listIndex < li.length; listIndex += 1) {
      li[listIndex].addEventListener("click", function () {
        li[listIndex].classList.add("selected");
        for (let index = 0; index < li.length; index += 1) {
          if (li[index] !== li[listIndex]) {
            li[index].classList.remove("selected");
          }
        }
      });
    }
  });
  //Fora do evento criar tarefa:

  //Carregando itens salvos
  let tasks = localStorage.getItem("saveList");
  if (tasks !== null) {
    listMother.innerHTML = tasks;
  } else {
    listMother.innerHTML = "";
  }
  let li = document.querySelectorAll("li");

  //Loop para adicionar ou remover class com bc cinza
  for (let listIndex = 0; listIndex < li.length; listIndex += 1) {
    li[listIndex].addEventListener("click", function () {
      li[listIndex].classList.add("selected");
      for (let index = 0; index < li.length; index += 1) {
        if (li[index] !== li[listIndex]) {
          li[index].classList.remove("selected");
        }
      }
    });
  }

  //Adicionando completed
  let listChild = document.querySelectorAll("li");
  for (let indexChild = 0; indexChild < listChild.length; indexChild += 1) {
    listChild[indexChild].addEventListener("dblclick", function () {
      listChild[indexChild].classList.toggle("completed");
    });
  }

  //Evento do botão limpa todas as tarefas
  btnClear.addEventListener("click", function () {
    let listMother = document.getElementById("lista-tarefas");
    let listChild = document.querySelectorAll("li");
    for (let index = 0; index < listChild.length; index += 1) {
      listMother.removeChild(listChild[index]);
    }
  });

  //Evento do botão limpa tarefas finalizadas
  btnEnd.addEventListener("click", function () {
    let listMother = document.getElementById("lista-tarefas");
    let listChild = document.querySelectorAll("li");
    for (let index = 0; index < listChild.length; index += 1) {
      if (listChild[index].classList.contains("completed")) {
        listMother.removeChild(listChild[index]);
      }
    }
  });
};
