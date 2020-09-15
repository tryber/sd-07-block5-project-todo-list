let inputText = document.getElementById("texto-tarefa")
let list = document.getElementById("lista-tarefas")
let button = document.getElementById("criar-tarefa")

// -------------- ADCIONANDO OS TODOs ---------------- //

button.addEventListener("click", function() {
    let novoTodo = document.createElement('li')
    novoTodo.innerHTML = inputText.value
    list.appendChild(novoTodo)
    inputText.value = ""
    inputText.focus()
    novoTodo.addEventListener("dblclick", riscaTodo)
    novoTodo.addEventListener("click", function() {    
        const previousItem = document.getElementsByClassName('selected');
        if (previousItem.length > 0) {
        previousItem[0].classList.remove('selected');
        }
        this.className = "selected"
    })
})

// -------------- RISCANDO TODOs FINALIZADOS ---------------- //

function riscaTodo(event) {
    const eventList = event.target.classList;
  for (let i = 0; i < eventList.length; i += 1) {
    if (eventList[i] === 'completed') {
      eventList.remove('completed');
      return;
    }
  }
  event.target.classList.add('completed');
}

// -------------- BOTÂO REMOVE TODOS OS TODOs ---------------- //

let buttonRemoveAll = document.getElementById("apaga-tudo")
buttonRemoveAll.addEventListener("click", function() {
  while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
  }
})

// -------------- BOTÂO REMOVE TODO SELECIONADO ---------------- //

let buttonRemoveSelected = document.getElementById("remover-selecionado")
let selecionado = document.getElementsByClassName("selected")
buttonRemoveSelected.addEventListener("click", function() {
  list.removeChild(selecionado[0])
})

// -------------- BOTÂO REMOVE TODOs FINALIZADOS ---------------- //

let buttonRemoveCompleted = document.getElementById("remover-finalizados")
let finalizados = document.getElementsByClassName("completed")
buttonRemoveCompleted.addEventListener("click", function() {
  while (list.hasChildNodes()) {  
    list.removeChild(finalizados[0]);
  }
})