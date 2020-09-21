let botao = document.querySelector("#criar-tarefa");
let campoInput = document.getElementById("texto-tarefa");
let pegandoOl = document.getElementById("lista-tarefas");

function clickESelection() {

  botao.addEventListener("click", function () {
    let criandoLi = document.createElement("li");
    pegandoOl.appendChild(criandoLi).innerText = campoInput.value;
    campoInput.value = "";

    let selecionandoLi = document.querySelectorAll("li");

    for (let i = 0; i < selecionandoLi.length; i += 1) {
      selecionandoLi[i].addEventListener('click', function () {
        selecionandoLi[i].classList.add('selecionado');
        for (let j = 0; j < selecionandoLi.length; j += 1) {
          if (selecionandoLi[i] !== selecionandoLi[j]) {
            selecionandoLi[j].classList.remove('selecionado')
          }
        }
      })
    }
    criandoLi.addEventListener('dblclick', function () {
      criandoLi.classList.toggle('completed');
    });
  });
};
clickESelection();
