const buttonAdd = document.getElementById("criar-tarefa");
const inputText = document.getElementById("texto-tarefa");
const outList = document.getElementById("lista-tarefas");
const buttonRemoveAll = document.getElementById("apaga-tudo");
const buttonRemoveEnd = document.getElementById("remover-finalizados");

buttonAdd.addEventListener("click", function () {
  if (!inputText.value == "") {
    let liElement = document.createElement("li");
    liElement.innerText = inputText.value;
    outList.appendChild(liElement);
    inputText.value = "";
  } else {
    alert("campo vazio");
  }
  inputText.focus();
});

outList.addEventListener("click", function (event) {
  let selectedClass = document.querySelector(".selected");
  if (selectedClass != null) {
    selectedClass.classList.remove("selected");
  }

  event.target.classList.add("selected");
});

outList.addEventListener("dblclick", function (event) {
  if (event.target.tagName !== "OL") {
    event.target.classList.toggle("completed");
  }
});
buttonRemoveAll.addEventListener("click", function () {
  outList.innerHTML = "";
});

buttonRemoveEnd.addEventListener("click", function () {
  let finalizados = document.querySelectorAll(".completed");
  for (index = 0; index < finalizados.length; index += 1) {
    finalizados[index].remove();
  }
});
