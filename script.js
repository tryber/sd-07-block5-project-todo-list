let buttonTarefa = document.getElementById(`criar-tarefa`);

let ordinal = document.createElement(`OL`);
ordinal.setAttribute(`id`, `lista-tarefas`);
document.getElementById(`lista`).appendChild(ordinal);

buttonTarefa.addEventListener(`click`, function(){
  let input = document.getElementById(`texto-tarefa`).value;
  let linha = document.createElement(`LI`);
  linha.addEventListener(`click`, function(event){
    let itens = document.getElementById("lista-tarefas").children;
    for (i = 0; i < itens.length; i += 1){
      if (itens[i].classList.contains(`selected`) == true){
        itens[i].classList.remove(`selected`);
      }
    }
    event.target.className += ` selected`;
  })
  linha.addEventListener(`dblclick`, function(event){
    if (event.target.classList.contains(`completed`) == true){
      event.target.classList.remove(`completed`);
    }
    else {
      event.target.className += ` completed`;
    }
    
  })
  let texto = document.createTextNode(input);
  linha.appendChild(texto);
  document.getElementById(`lista-tarefas`).appendChild(linha);  
  document.getElementById(`texto-tarefa`).value = ``;
  let clear = document.getElementById(`texto-tarefa`).value;
})

