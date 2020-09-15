const btnAdd = document.getElementById('criar-tarefa');
btnAdd.addEventListener('click', function () {
  const getInput = document.getElementById('texto-tarefa').value;
  const listaTarefa = document.getElementById('lista-tarefas');
  const elementeLi = document.createElement('li');
  elementeLi.id = `id${document.getElementById('texto-tarefa').value}`;
  elementeLi.addEventListener('click', function () {
    removeColor();
    elementeLi.style.backgroundColor = ' rgb(128, 128, 128)';
  });
  elementeLi.innerHTML = getInput;
  listaTarefa.appendChild(elementeLi);
  document.getElementById('texto-tarefa').value = '';
});

const obj = document.getElementById('lista-tarefas');
const btn = document.getElementById('apaga-tudo');
btn.addEventListener('click', function () {
  while (obj.hasChildNodes()) {
    obj.removeChild(obj.lastChild);
  }
});

function removeColor() {
  const listaLi = document.getElementsByTagName('li');
  for (let index = 0; index < listaLi.length; index += 1) {
    listaLi[index].style.backgroundColor = '';
  }
}
