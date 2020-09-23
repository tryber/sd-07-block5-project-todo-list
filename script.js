const text = document.querySelector('#texto-tarefa')
const moveDown = document.querySelector('#mover-baixo')
const moveUp = document.querySelector('#mover-cima')
const remove = document.querySelector('#remover-selecionado')
const removeFinished = document.querySelector('#remover-finalizados')
const eraseAll = document.querySelector('#apaga-tudo')
const list = document.querySelector('#lista-tarefas')
const taskCreate = document.querySelector('#criar-tarefa')
const save = document.querySelector('#salvar-tarefas')
let selected;

list.innerHTML = localStorage.getItem('saved');

taskCreate.addEventListener('click', function () {
  
  let li = document.createElement('li');
  li.classList.add('list-item');

  li.addEventListener('click', function () {
    if (li !== selected) {
      li.classList.add('selected');
      if (selected !== undefined) { 
        selected.classList.remove('selected'); 
      }
      selected = li;
    }
  });

  li.addEventListener('dblclick', function () {
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  });

  if (text.value === ''){
    alert('Digite a tarefa')
  }else{
  li.innerText = text.value;
  text.value = '';
  list.appendChild(li);
  }
});

eraseAll.addEventListener('click', function () {
  let li = document.querySelectorAll('.list-item');
  for (let index = 0; index < li.length; index += 1) { li[index].remove(); }
});

removeFinished.addEventListener('click', function () {
    let li = document.querySelectorAll('.completed');
    for (let index = 0; index < li.length; index += 1) {
      li[index].remove();
    }
  });

remove.addEventListener('click', function () {
  selected.remove();
});

moveUp.addEventListener('click', function () {
  if (selected !== undefined) {
    if (selected.previousSibling != null) {
      selected.parentNode.insertBefore(selected, selected.previousSibling);
    }
  }
});

moveDown.addEventListener('click', function () {
  if (selected !== undefined) {
    if (selected.nextSibling != null) {
      selected.parentNode.insertBefore(selected.nextSibling, selected);
    }
  }
});

save.addEventListener('click', function () {
    localStorage.setItem('saved', list.innerHTML);
  });