let botaoAddTarefa = document.querySelector("#criar-tarefa");
let caixaTextoTarefa = document.querySelector("#texto-tarefa");
let listaDeTarefas = document.querySelector("#lista-tarefas");

let todasAsLis = [];


botaoAddTarefa.addEventListener('click',function adicionandoTarefa(){ 
    let index = 0;
    let novaTarefa = [];
    novaTarefa[index] = document.createElement('li') 
    novaTarefa[index].classList.add("novaTarefa")
    novaTarefa[index].innerText = caixaTextoTarefa.value
    listaDeTarefas.appendChild(novaTarefa[index]);  
    caixaTextoTarefa.value = '';
    todasAsLis = document.querySelectorAll('.novaTarefa');

    selecionarItem(novaTarefa[index]);
    tarefaCompleta(novaTarefa[index]);
    apagarTudo(novaTarefa[index]);
    index++;

   
});
  
function tarefaCompleta(novaTarefa){
    novaTarefa.addEventListener('dblclick', function (){
        novaTarefa.classList.toggle('finalizado');
    });
}

function selecionarItem(novaTarefa){
    novaTarefa.addEventListener('click', function (){
        for (let index = 0; index < todasAsLis.length; index ++){
            todasAsLis[index].classList.remove('selecionado');
        }
          novaTarefa.classList.toggle('selecionado');
    });
}



function apagarTudo(novaTarefa){
let apagaTudo = document.querySelector("#apaga-tudo");
apagaTudo.addEventListener('click', function apagarLista() {
  let itens = document.querySelectorAll(".novaTarefa");
    for (let i = 0; i < itens.length; i += 1){
          itens[i].remove();
    }
});
}
