let selected;
document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('saved');

document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.addEventListener('click', function () {
    if (li !== selected) {
      li.classList.add('selected');
      if (selected !== undefined) { selected.classList.remove('selected'); }
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
  li.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  document.querySelector('#lista-tarefas').appendChild(li);
});

document.querySelector('#apaga-tudo').addEventListener('click', function () {
  const li = document.querySelectorAll('.list-item');
  for (let index = 0; index < li.length; index += 1) { li[index].remove(); }
});

document
  .querySelector('#remover-finalizados')
  .addEventListener('click', function () {
    const li = document.querySelectorAll('.completed');
    for (let index = 0; index < li.length; index += 1) {
      li[index].remove();
    }
  });

document
  .querySelector('#remover-selecionado')
  .addEventListener('click', function () {
    selected.remove();
  });

document.querySelector('#mover-cima').addEventListener('click', function () {
  if (selected !== undefined) {
    if (selected.previousSibling != null) {
      selected.parentNode.insertBefore(selected, selected.previousSibling);
    }
  }
});

document.querySelector('#mover-baixo').addEventListener('click', function () {
  if (selected !== undefined) {
    if (selected.nextSibling != null) {
      selected.parentNode.insertBefore(selected.nextSibling, selected);
    }
  }
});

document
  .querySelector('#salvar-tarefas')
  .addEventListener('click', function () {
    localStorage.setItem('saved', document.querySelector('#lista-tarefas').innerHTML);
  });
