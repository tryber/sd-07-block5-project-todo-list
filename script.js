document.querySelector('#criar-tarefa').addEventListener('click', function newList() {
  const newLi = document.createElement('li');
  document.querySelector('ol').appendChild(newLi);
  newLi.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';

  newLi.addEventListener('click', function () {
    const selectItem = document.querySelector('.selected');
    if (selectItem) {
      selectItem.classList.remove('selected');
    }
    newLi.classList.add('selected');
  });

  newLi.addEventListener('dblclick', function () {
    newLi.classList.toggle('completed');
  });
});


document.querySelector('#apaga-tudo').addEventListener('click', function deleteList() {
  const deleteOl = document.querySelector('#lista-tarefas');
  deleteOl.innerHTML = '';
});


document.querySelector('#remover-finalizados').addEventListener('click', function deleteCompleted() {
  const deleteLi = document.querySelector('#lista-tarefas');
  const completedLi = document.querySelectorAll('.completed');
  for (let index = 0; index < completedLi.length; index += 1) {
    deleteLi.removeChild(completedLi[index]);
  }
});

document.querySelector('#remover-selecionado').addEventListener('click', function deleteSelected() {
  const deleteLi = document.querySelector('#lista-tarefas');
  const selectedLi = document.querySelectorAll('.selected');
  for (let index = 0; index < selectedLi.length; index += 1) {
    deleteLi.removeChild(selectedLi[index]);
  }
});


document.querySelector('#salvar-tarefas').addEventListener('click', function saveList() {
  const workList = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('saveList', workList);
});

function refresh() {
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('saveList');
}
window.onload = refresh;


// https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
document.querySelector('#mover-cima').addEventListener('click', function upItem() {
  const move = document.querySelector('#lista-tarefas');
  const item = document.querySelector('.selected');
  if (item !== null && item !== move.firstChild) {
    move.insertBefore(item, item.previousSibling);
  }
});

document.querySelector('#mover-baixo').addEventListener('click', function downItem() {
  const move = document.querySelector('#lista-tarefas');
  const item = document.querySelector('.selected');
  if (item !== null && item !== move.lastChild) {
    move.insertBefore(item.nextSibling, item);
  }
});
// ----------------------------------------------
