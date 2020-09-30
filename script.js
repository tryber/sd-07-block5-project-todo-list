const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagarTudo = document.getElementById('apaga-tudo');
const feito = document.getElementsByClassName('feito');



criaTarefa.addEventListener('click', function(){ 
    if(textoTarefa.value !== ''){
        const itenList = document.createElement('li');
        itenList.innerText = textoTarefa.value;
        itenList.className = ('iten-list')
        listaTarefas.appendChild(itenList);
        textoTarefa.value = '';
    }
});


listaTarefas.addEventListener('dblclick', function(event){
    if(event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
    }else{
        event.target.classList.add('completed');
    }
});



listaTarefas.addEventListener('click', function(event){
    if(event.target.classList.contains('selected')){
        event.target.classList.remove('selected');
    }else{
        event.target.classList.add('selected');
    }
})
listaTarefas.addEventListener('click', function(event){
    const selecionado = document.querySelector('.selected');
    if(selecionado !== null){
        selecionado.classList.remove('selected');
    }
        event.target.classList.add('selected');   
})

const removerSelecionado = document.getElementById('remover-selecionado');
    
removerSelecionado.addEventListener('click', function(){
    document.querySelector('.selected').remove();
})
apagarTudo.addEventListener('click', function () {    
    while (listaTarefas.hasChildNodes()){
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
  });


const removeFinalizado = document.getElementById('remover-finalizados');
removeFinalizado.addEventListener('click', function () {
     const completos = document.querySelectorAll('.completed');
    for(index = 0; index < completos.length; index += 1){
        completos[index].remove();
    }
  });

const movCima = document.getElementById('mover-cima');
const movBaixo = document.getElementById('mover-baixo');

const salvarTarefas = document.getElementById('salvar-tarefas');
salvarTarefas.addEventListener('click', function(){
    localStorage.clear();
    const listaSalva = document.querySelector('ol');
    localStorage.setItem('novaLista', listaSalva.innerHTML);
});

window.onload = function(){
    const novaLista = document.querySelector('ol');
    novaLista.innerHTML = localStorage.getItem('novaLista');

}