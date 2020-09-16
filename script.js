document.querySelector('#criar-tarefa').addEventListener('click', function () {
  const newTask = document.createElement('li'); // criando li
  document.querySelector('ol').appendChild(newTask); // linkando o li ao ol
  newTask.innerText = document.querySelector('input').value; // escrevendo no li
  document.querySelector('input').value = ''; // limpando o input
// para pintar de cinza o selecionado
  newTask.addEventListener('click', function () {
    const isGray = document.querySelector('.selected'); // pega o que tiver com o gray
    if (isGray) { // saber se existe alguma li com o gray
      isGray.classList.remove('selected'); // remove se tiver
    }
    newTask.classList.add('selected'); // se não, adiciona
  });
// para riscar o completado
  newTask.addEventListener('dblclick', function () {
    if (newTask.classList.contains('completed')) { // saber se contém a classe especificada
      newTask.classList.remove('completed'); // se sim, remove
    } else {
      newTask.classList.add('completed'); // se não, adiciona
    }
  });
});
// para salvar todas as li no localStorage
document.querySelector('#salvar-tarefas').addEventListener('click', function () {
  localStorage.clear(); // limpa o que tiver salvo para receber lista nova
  const allList = document.querySelector('ol'); // todas as li novas a partir do pai
  localStorage.setItem('Task', allList.innerHTML);
});
// quando a página for atualizada, ele vai trazer a lista que estiver salva no localStorage
function refresh() {
  document.querySelector('ol').innerHTML = localStorage.getItem('Task');
}
window.onload = refresh;
// para remover o selecionado
document.querySelector('#remover-selecionado').addEventListener('click', function () {
  while (document.querySelector('.selected')) { // remove só o selecionado
    document.querySelector('ol').removeChild(document.querySelector('.selected'));
  }
});
// para remover o completado
document.querySelector('#remover-finalizados').addEventListener('click', function () {
  while (document.querySelector('.completed')) { // remove só os completed
    document.querySelector('ol').removeChild(document.querySelector('.completed'));
  }
});
// para remover a lista toda
document.querySelector('#apaga-tudo').addEventListener('click', function () {
  while (document.querySelector('ol').firstChild) { // para remover todos os li
    document.querySelector('ol').removeChild(document.querySelector('ol').firstChild);
  }
});
// para mover para cima
document.querySelector('#mover-cima').addEventListener('click', function () {
  const allTask = document.querySelectorAll('li');
  const justSelected = document.querySelector('.selected');
  if (allTask.length === 0 || justSelected === null) {
    alert('Escreva e selecione uma tarefa');
  } else if (justSelected.previousElementSibling === null) {
    alert('Escreva mais uma tarefa');
  } else {
    document.querySelector('ol').insertBefore(justSelected, justSelected.previousElementSibling);
  }
});
// // mover para baixo
document.querySelector('#mover-baixo').addEventListener('click', function () {
  const allTask = document.querySelectorAll('li');
  const justSelected = document.querySelector('.selected');
  if (allTask.length === 0 || justSelected === null) {
    alert('Escreva e selecione uma tarefa');
  } else if (justSelected.nextElementSibling === null) {
    alert('Escreva mais uma tarefa');
  } else {
    document.querySelector('ol').insertBefore(justSelected.nextElementSibling, justSelected);
  }
});
// insertBefore busca o pai e diz: o filho do 1º parâmetro vai mudar de lugar com o filho do 2º
// referência https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
