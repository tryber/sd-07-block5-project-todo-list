window.onload = function(){
    const buttonCreateTask = document.getElementById('criar-tarefa');
    const inputTextTask = document.getElementById('texto-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    const buttonClearList = document.getElementById('apaga-tudo');
    const buttonClearFinishedItens = document.getElementById('remover-finalizados');
    let completedTasks = document.querySelectorAll('.completed');

    function addItemToTaskList(){
        if(inputTextTask.value == ''){
            alert('adicione um nome ao item da lista');
        }else{
            let li = document.createElement('li');
            li.addEventListener('click',toggleSelected);
            li.addEventListener('dblclick', markAsCompleted);
            li.innerText = inputTextTask.value;
            taskList.appendChild(li);
            inputTextTask.value = '';
        }
    }

    function toggleSelected(event){
        const selectedItem = document.querySelector('.selected');
        
        if(selectedItem){
            selectedItem.classList.remove('selected');
        }
        
        event.target.classList.add('selected');

    }
    function markAsCompleted(event){
        const selectedItem = document.querySelector('.completed');
        
    
        event.target.classList.toggle('completed');

    }

    function removeAllItensToTheList(event){
        taskList.innerHTML = '';
    }

    function removeAllFinishedItens(event){
        completedTasks = document.getElementsByClassName('completed')
        let lenght = completedTasks.length
        for(let index = 0; index < lenght; index += 1)
            completedTasks[0].parentElement.removeChild(completedTasks[0])
    }
    



    buttonCreateTask.addEventListener('click', addItemToTaskList);
   
    buttonClearList.addEventListener('click',removeAllItensToTheList);
    
    buttonClearFinishedItens.addEventListener('click',removeAllFinishedItens);
}