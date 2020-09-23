let createTaskButton = document.getElementById("criar-tarefa");
let inputTaskText = document.getElementById("texto-tarefa");
let taskList = document.getElementById("lista-tarefas");


createTaskButton.addEventListener('click', function(){

if(inputTaskText.value !== ''){
    let listTag = document.createElement('li');
    listTag.innerText = inputTaskText.value;
    taskList.appendChild(listTag);
    inputTaskText.value= '';
 
}
    inputTaskText.focus();   
});

taskList.addEventListener('click',function(event){


      if(event.target.tagName == 'LI'){
  let allLi = document.querySelector('.selected'); 
    if(allLi != null){
       allLi.classList.remove('selected');
   } 
   event.target.classList.add('selected');}
});

// adicionar dublo click 
taskList.addEventListener('dblclick', function(event){

    if(event.target.tagName == 'LI'){
        event.target.classList.toggle('completed');
    }
});

// adiconar o botão de apagar

let btDeleteAll = document.getElementById('apaga-tudo');
let btRemoveFinished = document.getElementById('remover-finalizados');

btDeleteAll.addEventListener('click', function(){
    let newLine = document.querySelectorAll('li');
    for(let index = 0; index < newLine.length;  index += 1){
        newLine[index].remove();
    }
});

btRemoveFinished.addEventListener('click', function(){
    let delItem = document.querySelectorAll('.completed');
    for(let index = 0 ; index < delItem.length; index += 1){
        delItem[index].remove();
    }

});