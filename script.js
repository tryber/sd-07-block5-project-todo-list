let addTask = document.getElementById("criar-tarefa");
let list = document.getElementById("lista-tarefas");
let buttonClearAll = document.getElementById("apaga-tudo");
let buttonClearCompleted = document.getElementById("remover-finalizados");
let buttonClearSelected = document.getElementById("remover-selecionado");
let buttonUp = document.getElementById("mover-cima");
let buttonDown = document.getElementById("mover-baixo");

addTask.addEventListener("click", function () {
    const newTask = document.createElement("li");
    document.querySelector("ol").appendChild(newTask);
    newTask.innerText = document.querySelector("input").value;
    document.querySelector("input").value = "";
  
    newTask.addEventListener("click", function () {
      const elementSelected = document.querySelector(".selected");
      if (elementSelected) {
        elementSelected.classList.remove("selected");
      }
      newTask.classList.add("selected");
    });

    newTask.addEventListener ("dblclick", function () {
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
        newTask.classList.toggle("completed");
  });
});

buttonClearAll.addEventListener ("click", function () {
        list.innerHTML = "";
});

buttonClearCompleted.addEventListener ("click", function () {
    let completedElements = document.querySelectorAll(".completed");
    for (let i = 0; i < completedElements.length; i += 1) {
        list.removeChild(completedElements[i])
    }
});

buttonClearSelected.addEventListener ("click", function () {
    let selectedElements = document.querySelectorAll(".selected");
    for (let i = 0; i < selectedElements.length; i += 1) {
        list.removeChild(selectedElements[i])
    }
});

buttonUp.addEventListener ("click", function () {
    const elementSelected = document.querySelector(".selected");
    //https://stackoverflow.com/questions/46724542/javascript-move-elements-up-and-down-in-the-list
    //https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
    //https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp
    if (elementSelected != null && elementSelected.previousElementSibling != null) {
        list.insertBefore(elementSelected, elementSelected.previousElementSibling);
    }
});

buttonDown.addEventListener ("click", function () {
    const elementSelected = document.querySelector(".selected");
    //https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
    if (elementSelected != null && elementSelected.nextElementSibling != null) {
        list.insertBefore(elementSelected.nextElementSibling, elementSelected);
    }
});