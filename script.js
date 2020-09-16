window.onload = function () {
  let taskInput = document.querySelector('#texto-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  let taskBtn = document.querySelector('#criar-tarefa');                                                                                                                                                                                                                                                                                           
  let selected = document.querySelector('.selected');
  let removeAll = document.querySelector('#apaga-tudo');
  let removeCompleted = document.querySelector('#remover-finalizados')
  let moveUpBtn = document.querySelector('#mover-cima')
  let moveDownBtn = document.querySelector('#mover-baixo')
  let removeSelected = document.querySelector('#remover-selecionado')
  let saveTasks = document.querySelector('#salvar-tarefas')


  
  // Add task button function
  taskBtn.addEventListener('click', function () {
    // Add new task
    let task = document.createElement('li');
    task.innerText = taskInput.value;
    taskList.appendChild(task);
    taskInput.value = "";
    
    // Adding click event selected in task
    task.addEventListener('click', getSelected);

    // Adding double click event completed in task
    task.addEventListener('dblclick', getCompleted);
  });

  let getSelected = function (event) {
    if (selected !== null) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
      selected = event.target
    } else {
      event.target.classList.add('selected');
      selected = event.target
    };
  }

  let getCompleted = function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed')
    } else {
      event.target.classList.add('completed');;
    }
  }

  let cleanAllTasks = function () {
    let taskListChildren = taskList.querySelectorAll('li')
    for (let index = 0 ; index < taskListChildren.length ; index += 1) {
      taskList.removeChild(taskListChildren[index])
    }
  }

  removeAll.addEventListener('click', cleanAllTasks)
  
  let removeCompletedTasks = function () {
    let taskListChildren = taskList.querySelectorAll('li')
    for (let index = 0 ; index < taskListChildren.length ; index += 1) {
      if (taskListChildren[index].classList.contains('completed')) {
        taskList.removeChild(taskListChildren[index])
      }
    }
  }

  removeCompleted.addEventListener('click', removeCompletedTasks)

  // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
  let moveUp = function () {
    if (selected !== null) {
      if (selected.previousSibling !== null) {
        selected.parentNode.insertBefore(selected, selected.previousSibling)
      }
    }
  }

  moveUpBtn.addEventListener('click', moveUp)

  // https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/
  let moveDown = function () {
    if (selected !== null) {
      if (selected.nextSibling !== null) {
        selected.parentNode.insertBefore(selected.nextSibling, selected)
      }
    }
  }

  moveDownBtn.addEventListener('click', moveDown)

  let getSelectedRemoved = function () {
    taskList.removeChild(selected)
  }

  removeSelected.addEventListener('click', getSelectedRemoved)

  let saveAllTasks = function () {
    if (taskList.querySelector('.selected') !== null) {
      let oldSelected = taskList.querySelector('.selected')
      oldSelected.classList.remove('selected')
    }
    localStorage.setItem('savedTasks', taskList.innerHTML)
  }

  saveTasks.addEventListener('click', saveAllTasks)

  let checkSavedTasks = function () {
    if (localStorage.length !== 0) {
      taskList.innerHTML = localStorage.getItem('savedTasks')
      console.log(taskList)
      let taskListChildren = taskList.querySelectorAll('li')
      taskListChildren.forEach((task) => {
        // Adding click event selected in task
      task.addEventListener('click', getSelected);

      // Adding double click event completed in task
      task.addEventListener('dblclick', getCompleted);
      });
    }
  
  }

  checkSavedTasks() 

}
