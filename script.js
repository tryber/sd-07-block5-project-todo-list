const container = document.querySelector("#container");
const input =document.querySelector("#texto-tarefa");
const buttonAdicionar = document.querySelector("#criar-tarefa");
const buttonClear = document.querySelector("#apaga-tudo");

const ol = document.createElement("ol");
ol.id ="lista-tarefas";
container.appendChild(ol);

buttonAdicionar.addEventListener('click', function(){
  if(input.value === ""){
    alert("adicione uma tarefa");
  }else{
    const li =document.createElement("li");
    const lista= document.createTextNode(input.value);
    li.className= "tarefa";
    li.appendChild(lista);
    ol.appendChild(li);
    input.value ="";
  }
});

buttonClear.addEventListener('click', function () {
  if (ol.children.length === 0 ) {
    alert('Não há tarefas listadas');
  } else {
    const listas = document.querySelectorAll(".tarefa");
    for (let index = 0; index < listas.length; index += 1) {
     ol.removeChild(listas[index]);
    }
  }
});

ol.addEventListener('click', function(event) {
  if (event.target.className === "tarefa") {
    for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].className = "tarefa";
    }
    event.target.className = "selected";
  } else {
    for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].className = "tarefa";
  }
  }
});





