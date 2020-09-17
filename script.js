window.onload = function () {



  let orderedListElement = document.getElementById("lista-tarefas");
  orderedListElement.innerHTML = localStorage.getItem("list")
  let li = document.getElementsByTagName("li")
  let buttonToAdd = document.getElementById("criar-tarefa");
  let array = [];

  buttonToAdd.addEventListener('click', function () {
    let textTasks = document.getElementById("texto-tarefa");
    array.push(textTasks.value);
    let elementLi = document.createElement("li")
    elementLi.className = "tarefa";
    let counter = 0;
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
    })
    orderedListElement.appendChild(elementLi).innerHTML = textTasks.value;
    textTasks.value = "";
  })

  let moveUp = document.getElementById("mover-cima");

  moveUp.addEventListener('click', function () {
    let indexElement = 0;
    let contentSelect = "";
    let contentChange = "";
    let boolSelecionadaCompleta = false;
    let boolPreviousContent = false;
    let thereIsSelectionUp = false;

    for (let index = 0; index < li.length; index++) {
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

      for (let index = 0; index < li.length; index++) {
        if (index == (indexElement - 1)) {
          contentChange = li[index].innerText;
        }
      }

      for (let index = 0; index < li.length; index++) {
        if (index == indexElement) {
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
          li[indexElement].className = "tarefa"
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
  })

  let moveDown = document.getElementById("mover-baixo");

  moveDown.addEventListener('click', function () {
    let indexElement = 0;
    let contentSelect = "";
    let contentChange = "";
    let boolSelecionadaCompleta = false;
    let boolPreviousContent = false;
    let thereIsSelectionDown = false;

    for (let index = 0; index < li.length; index++) {
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

      for (let index = 0; index < li.length; index++) {
        if (index == (indexElement + 1)) {
          contentChange = li[index].innerText;
        }
      }

      for (let index = 0; index < li.length; index++) {
        if (index == indexElement) {
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
          li[indexElement].className = "tarefa"
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
  })

  function removeSelected(li) {
    for (let index = 0; index < li.length; index++) {
      li[index].classList.remove("selecionada");
    }
  }


  let buttonRemoveAll = document.getElementById("apaga-tudo");

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);

    }
  }

  function clearArrayContent(array) {
    for (let index = 0; index < array.length; index++) {
      array.pop();
    }
  }

  buttonRemoveAll.addEventListener('click', function () {
    removeAllChildNodes(orderedListElement);
    clearArrayContent(array);
  })

  //Após clicar no botão, os itens com a classe "completed", serão removidos.
  //Fonte: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

  let elementsClassCompleted = document.getElementsByClassName("completed");
  let buttonRemoveClassCompleted = document.getElementById("remover-finalizados");

  //Explicação: Após executar um clique no botão com id="remover-finalizados", a função executará a estrutura de repetição while. Enquanto o tamanho do vetor elementsClassCompleted for maior que 0,
  //quer dizer que ainda há elementos pertencentes à classe completed dentro do array. Desta forma, dentro da estrutura, o elemento raiz do elemento filho será acessado, sendo removido o primeiro filho.
  //Isto será executado até não haver mais elementos filhos dentro do array.

  buttonRemoveClassCompleted.addEventListener('click', function () {
    while (elementsClassCompleted.length > 0) {
      elementsClassCompleted[0].parentNode.removeChild(elementsClassCompleted[0]);
    }
  })

  let elemetsClassSelecionada = document.getElementsByClassName("selecionada");
  let buttonRemoveClassSelecionada = document.getElementById("remover-selecionado");

  buttonRemoveClassSelecionada.addEventListener('click', function () {
    while (elemetsClassSelecionada.length > 0) {
      elemetsClassSelecionada[0].parentNode.removeChild(elemetsClassSelecionada[0]);
    }
  })

  //Botão: salvar

  let saveList = document.getElementById("salvar-tarefas");

  saveList.addEventListener('click', function () {

    localStorage.setItem("list", orderedListElement.innerHTML);

  })

}
