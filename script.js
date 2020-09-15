document.getElementById("criar-tarefa").addEventListener("click", function () {
  let inputText = document.getElementById("texto-tarefa").value;
  let itemList = document.createElement("li");
  itemList.className = "listado";
  itemList.innerHTML = inputText;
  document.getElementById("lista-tarefas").appendChild(itemList);
  document.getElementById("texto-tarefa").value = "";
});

document.getElementById("apaga-tudo").addEventListener("click", function () {
  document.getElementById("lista-tarefas").innerHTML = "";
});

document
  .getElementById("lista-tarefas")
  .addEventListener("click", function (task) {
    let allTasks = document.querySelectorAll(".listado");
    for (let index = 0; index < allTasks.length; index += 1) {
      allTasks[index].classList.remove("selected");
    }
    task.target.classList.add("selected");
  });

document
  .getElementById("lista-tarefas")
  .addEventListener("dblclick", function (task) {
    task.target.classList.toggle("completed");
  });

document
  .getElementById("remover-finalizados")
  .addEventListener("click", function () {
    let list = document.querySelectorAll(".completed");
    let fatherList = document.getElementById("lista-tarefas");
    for (let index = 0; index < list.length; index += 1) {
      fatherList.removeChild(list[index]);
    }
  });

// document.getElementById('color-palette').addEventListener("click", function(event) {
//   if (event.target.classList.contains('selected')) {
//     alert('Esta cor já está selecionada')
//   } else {
//     let paints = document.querySelectorAll('.color')
//     for (let index = 0; index < paints.length; index++) {
//       paints[index].classList.remove('selected')
//     }
//     event.target.classList.add('selected')
//   }
// })
