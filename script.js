let buttonForTask = document.getElementById('criar-tarefa');
let inputTextTask = document.getElementById('texto-tarefa');
let olListTask = document.getElementById('lista-tarefas');

buttonForTask.addEventListener('click', function(){
    let liOne = document.createElement('li');
     liOne.innerText = inputTextTask.value;
     olListTask.appendChild(liOne);
     inputTextTask.value = '';
});


olListTask.addEventListener('click', function(event){
  if(event.target.tagName === 'LI'){
    let allListSelec = document.querySelector('.selected');
    if(allListSelec != null){
        allListSelec.classList.remove('selected')
    }
    event.target.classList.add('selected');
  }
     
})


olListTask.addEventListener('dblclick', function(event){
    if (event.target.tagName === 'LI'){
       event.target.classList.toggle('completed');
    }
   })