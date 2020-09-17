"use strict";

window.onload = function () {
  var orderedListElement = document.getElementById("lista-tarefas");
  orderedListElement.innerHTML = localStorage.getItem("list");
  var li = document.getElementsByTagName("li");
  var buttonToAdd = document.getElementById("criar-tarefa");
  var array = [];
  buttonToAdd.addEventListener('click', function () {
    var textTasks = document.getElementById("texto-tarefa");
    array.push(textTasks.value);
    var elementLi = document.createElement("li");
    elementLi.className = "tarefa";
    var counter = 0;
    elementLi.addEventListener('click', function (event) {
      removeSelected(li);
      elementLi.classList.add("selecionada");
    });
    elementLi.addEventListener('dblclick', function (event) {
      counter += 1;

      if (counter == 1) {
        event.target.classList.add("completed");
      } else {
        event.target.classList.remove("completed");
        counter = 0;
      }
    });
    orderedListElement.appendChild(elementLi).innerHTML = textTasks.value;
    textTasks.value = "";
  });
  var moveUp = document.getElementById("mover-cima");
  moveUp.addEventListener('click', function () {
    var indexElement = 0;
    var contentSelect = "";
    var contentChange = "";
    var boolSelecionadaCompleta = false;
    var boolPreviousContent = false;
    var thereIsSelectionUp = false;

    for (var index = 0; index < li.length; index++) {
      if (li[index].classList.contains("selecionada")) {
        indexElement = index;
        contentSelect = li[index].innerText;
        thereIsSelectionUp = true;
      }
    }

    if (thereIsSelectionUp) {
      if (li[indexElement].classList.contains("completed")) {
        boolSelecionadaCompleta = true;
      }

      if (indexElement - 1 >= 0) {
        if (li[indexElement - 1].classList.contains("completed")) {
          boolPreviousContent = true;
        }
      }

      for (var _index = 0; _index < li.length; _index++) {
        if (_index == indexElement - 1) {
          contentChange = li[_index].innerText;
        }
      }

      for (var _index2 = 0; _index2 < li.length; _index2++) {
        if (_index2 == indexElement) {
          removeSelected(li);
        }
      }

      if (indexElement >= 1) {
        if (boolSelecionadaCompleta) {
          li[indexElement - 1].className = "tarefa completed selecionada";
        } else {
          li[indexElement - 1].className = "tarefa selecionada";
        }

        if (boolPreviousContent) {
          li[indexElement].className = "tarefa completed";
        } else {
          li[indexElement].className = "tarefa";
        }

        li[indexElement - 1].innerText = contentSelect;
        li[indexElement].innerText = contentChange;
      } else {
        if (li[0].classList.contains("completed")) {
          li[0].className = "tarefa completed selecionada";
        } else {
          li[0].className = "tarefa selecionada";
        }
      }
    }
  });
  var moveDown = document.getElementById("mover-baixo");
  moveDown.addEventListener('click', function () {
    var indexElement = 0;
    var contentSelect = "";
    var contentChange = "";
    var boolSelecionadaCompleta = false;
    var boolPreviousContent = false;
    var thereIsSelectionDown = false;

    for (var index = 0; index < li.length; index++) {
      if (li[index].classList.contains("selecionada")) {
        indexElement = index;
        contentSelect = li[index].innerText;
        thereIsSelectionDown = true;
      }
    }

    if (thereIsSelectionDown) {
      if (li[indexElement].classList.contains("completed")) {
        boolSelecionadaCompleta = true;
      }

      if (indexElement + 1 < li.length) {
        if (li[indexElement + 1].classList.contains("completed")) {
          boolPreviousContent = true;
        }
      }

      for (var _index3 = 0; _index3 < li.length; _index3++) {
        if (_index3 == indexElement + 1) {
          contentChange = li[_index3].innerText;
        }
      }

      for (var _index4 = 0; _index4 < li.length; _index4++) {
        if (_index4 == indexElement) {
          removeSelected(li);
        }
      }

      if (indexElement <= li.length - 2) {
        if (boolSelecionadaCompleta) {
          li[indexElement + 1].className = "tarefa completed selecionada";
        } else {
          li[indexElement + 1].className = "tarefa selecionada";
        }

        if (boolPreviousContent) {
          li[indexElement].className = "tarefa completed";
        } else {
          li[indexElement].className = "tarefa";
        }

        li[indexElement + 1].innerText = contentSelect;
        li[indexElement].innerText = contentChange;
      } else {
        if (li[li.length - 1].classList.contains("completed")) {
          li[li.length - 1].className = "tarefa completed selecionada";
        } else {
          li[li.length - 1].className = "tarefa selecionada";
        }
      }
    }
  });

  function removeSelected(li) {
    for (var index = 0; index < li.length; index++) {
      li[index].classList.remove("selecionada");
    }
  }

  var buttonRemoveAll = document.getElementById("apaga-tudo");

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function clearArrayContent(array) {
    for (var index = 0; index < array.length; index++) {
      array.pop();
    }
  }

  buttonRemoveAll.addEventListener('click', function () {
    removeAllChildNodes(orderedListElement);
    clearArrayContent(array);
  }); //Após clicar no botão, os itens com a classe "completed", serão removidos.
  //Fonte: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

  var elementsClassCompleted = document.getElementsByClassName("completed");
  var buttonRemoveClassCompleted = document.getElementById("remover-finalizados"); //Explicação: Após executar um clique no botão com id="remover-finalizados", a função executará a estrutura de repetição while. Enquanto o tamanho do vetor elementsClassCompleted for maior que 0,
  //quer dizer que ainda há elementos pertencentes à classe completed dentro do array. Desta forma, dentro da estrutura, o elemento raiz do elemento filho será acessado, sendo removido o primeiro filho.
  //Isto será executado até não haver mais elementos filhos dentro do array.

  buttonRemoveClassCompleted.addEventListener('click', function () {
    while (elementsClassCompleted.length > 0) {
      elementsClassCompleted[0].parentNode.removeChild(elementsClassCompleted[0]);
    }
  });
  var elemetsClassSelecionada = document.getElementsByClassName("selecionada");
  var buttonRemoveClassSelecionada = document.getElementById("remover-selecionado");
  buttonRemoveClassSelecionada.addEventListener('click', function () {
    while (elemetsClassSelecionada.length > 0) {
      elemetsClassSelecionada[0].parentNode.removeChild(elemetsClassSelecionada[0]);
    }
  }); //Botão: salvar

  var saveList = document.getElementById("salvar-tarefas");
  saveList.addEventListener('click', function () {
    localStorage.setItem("list", orderedListElement.innerHTML);
  });
};