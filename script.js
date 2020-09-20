const click = document.getElementById('criar-tarefa');
const item = document.getElementById('lista-tarefas');
const cleanAll = document.querySelector('#apaga-tudo');
const cleanFinalized = document.querySelector('#remover-finalizados');

click.addEventListener("click", function() {
  let textInput = document.getElementById('texto-tarefa').value;  
  let textList = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  listItem.innerText = textInput;
  textList.appendChild(listItem);
  document.getElementById('texto-tarefa').value = "";
});

item.addEventListener("click", function() {

  if (event.target.className === 'completed') {
    document.getElementsByClassName('selected')[0].style.backgroundColor = 'white';

  } else if (document.getElementsByClassName('selected')[0] === undefined) {
    event.target.className = 'selected';
    event.target.style.backgroundColor = 'rgb(128, 128, 128';

    let completedLenth = document.querySelectorAll('#lista-tarefas .completed').length;
    for (index = 0; index < completedLenth; index += 1) {
      document.getElementsByClassName('completed')[index].style.backgroundColor = 'white';
    }
    
  } else {
    document.getElementsByClassName('selected')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('selected')[0].className = undefined;
    event.target.style.backgroundColor = 'rgb(128, 128, 128';
    event.target.className = 'selected';
  }
});

item.addEventListener("dblclick", function() {
  if (event.target.className != 'completed') {
    event.target.className = 'completed';
  } else if (event.target.className === 'completed') {
    event.target.className = 'not-completed';
  }
});

cleanAll.addEventListener('click', function() {
  let list = document.getElementById("lista-tarefas");
  let listLength = list.getElementsByTagName("li").length;
  for (let index = 0; index < listLength; index += 1) {
    list.removeChild(list.childNodes[0]);
  }
});

cleanFinalized.addEventListener('click', function() {
  document.querySelectorAll('.completed').forEach(function(a) {
    a.remove();
  });
});

    

