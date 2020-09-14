const button = document.getElementById('criar-tarefa');
let entryText = document.getElementById('texto-tarefa');
const eraser = document.getElementById('apaga-tudo');
const complete = document.getElementById('remover-finalizados');
button.addEventListener('click', function(){
    let list = document.getElementById('lista-tarefas');
    let item = document.createElement('li');
    item.innerText = entryText.value;
    entryText.value = '';
    item.className = 'item-lista';
    list.appendChild(item);
    selection();
})

function selection() {
    const components = document.querySelectorAll('.item-lista');
    for (let index = 0; index < components.length; index += 1) {
        components[index].addEventListener('click', changeBG)
        components[index].addEventListener('dblclick', mark);
}}

function changeBG(event) {
    const components = document.querySelectorAll('.item-lista');
    for (let index = 0; index < components.length; index += 1) {
        components[index].style.backgroundColor = 'white';
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

function mark(event) {
  if (event.target.className !== 'item-lista completed') {
  event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

eraser.addEventListener('click', function() {
  let blank = document.getElementsByTagName('li'), index;
  for (index = blank.length - 1; index >= 0; index -= 1) {
    blank[index].parentNode.removeChild(blank[index]);
  }
})

complete.addEventListener('click', function() {
  let completeList = document.querySelectorAll('.completed'), index;
  for (index = completeList.length - 1; index >= 0; index -= 1) {
    completeList[index].parentNode.removeChild(completeList[index]);
  }
})