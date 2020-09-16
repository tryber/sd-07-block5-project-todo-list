let buttonAdd = document.getElementById("criar-tarefa");
buttonAdd = buttonAdd.addEventListener("click", function lista() {
  let inputAdd = document.getElementById("texto-tarefa");
  let listOl = document.getElementById("lista-tarefas");
  let createLi = document.createElement("li");
  createLi.innerText = inputAdd.value;
  listOl.appendChild(createLi);
  inputAdd.value = "";
});
const listLi = document.querySelector("#lista-tarefas");
let buttonRemove = document.getElementById("apaga-tudo");
buttonRemove = buttonRemove.addEventListener("click", function () {
  let removeLi = document.getElementById("lista-tarefas");
  removeLi.innerHTML = "";
});

function doubleClick() {
  listLi.addEventListener("dblclick", function (event) {
    let listando = document.querySelectorAll(".completed");
    let li = event.target;
 if(listando[0] === li) {
   listando[0].classList.remove('completed')
 } else {
   event.target.classList.add('completed');
 }
  });
}
doubleClick();


function clickAndChangeColor() {
  listLi.addEventListener("click", function (event) {
    let listando = document.querySelectorAll(".selected");
    let li = event.target;
 if(listando[0] === li) {
   listando[0].classList.remove('selected')
 } else {
   event.target.classList.add('selected');
 }
  });
}
clickAndChangeColor();


