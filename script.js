const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const removeFinalizado = document.getElementById('remover-finalizados');
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

listaTarefas.addEventListener('click', function(){
    const selecionado = document.querySelector('.selected');
    if(selecionado){
        selecionado.classList.remove('selected');
    }else{
        selecionado.classList.add('selected');
    }
})


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


apagarTudo.addEventListener('click', function () {    
    while (listaTarefas.hasChildNodes()){
        listaTarefas.removeChild(listaTarefas.firstChild);
    }
  });

removeFinalizado.addEventListener('click', function () {
    const completo = document.querySelector('.completed')
    while (completo) { 
      listaTarefas.removeChild(document.querySelector('.completed'));
    }
  });

