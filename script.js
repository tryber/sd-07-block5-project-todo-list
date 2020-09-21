const textoTarefa = document.querySelector('#texto-tarefa');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');
const botaoApagar = document.querySelector('#apaga-tudo');
const botaoFinalizadas = document.querySelector('#remover-finalizados');
const arrayListaTarefas = [];

// adiciona as tarefas na lista e fundo cinza
botaoCriarTarefa.addEventListener('click', function()
{
    let tarefas;
    tarefas = document.createElement('li');
    tarefas.className = 'itens-lista';
    tarefas.innerHTML = textoTarefa.value;
    listaTarefas.appendChild(tarefas);
    textoTarefa.value = '';
    tarefas.addEventListener('dblclick', tarefaCompleta);
    arrayListaTarefas.push(tarefas);
    for(let index = 0; index < arrayListaTarefas.length; index += 1){
        arrayListaTarefas[index].addEventListener('click', function() {
          for (let j = 0; j < arrayListaTarefas.length; j += 1) {
              if (arrayListaTarefas[j].classList.contains('classeFundoCinza')) {
                   arrayListaTarefas[j].classList.remove('classeFundoCinza');
                }
              arrayListaTarefas[index].className += ' classeFundoCinza';
            };
        });
    };    
});

function tarefaCompleta(event){
    let itemSelecionado = event.target;
    if(itemSelecionado.classList.contains('completed')){
        itemSelecionado.classList.remove('completed');
    } else {
        itemSelecionado.className += ' completed';
    };
};

botaoApagar.addEventListener('click', apagaTudo);
function apagaTudo(){
    listaTarefas.innerHTML = '';
}

function apagaFinalizadas(){
    let arrayAtualizada = document.querySelectorAll('.completed');
    for(index = 0; index < arrayAtualizada.length; index += 1){
        listaTarefas.removeChild(arrayAtualizada[index]);    
    }
}
botaoFinalizadas.addEventListener('click', apagaFinalizadas);

let botaoConsole = document.querySelector('#botao-console');
botaoConsole.addEventListener('click', function(){
    let body = document.querySelector('body');
    console.log(body);
    console.log(listaTarefas);
    
});