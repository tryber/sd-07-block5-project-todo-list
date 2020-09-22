// Seleciona elemento da lista
function selectionListItem(event) {
  const todoItens = list.children;
  const selectedItem = event.target;
  for (let index = 0; index < list.childElementCount; index += 1){
    for (let j = 0; j < list.childElementCount; j += 1) {
      if (todoItens[j] !== selectedItem) {
        todoItens[j].style.backgroundColor = '';
      }
    }
    selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

// Risca o elemento da lista
function crossOutListItem(event) {
 const crossOutItem = event.target;
  if (crossOutItem.classList.value === "completed") {
    crossOutItem.classList.remove("completed");
  } else {
    crossOutItem.classList.add("completed");
  }
}

// Criar elemento na lista
const list = document.querySelector('#lista-tarefas');

function createListItem() {
  const listItem = document.createElement('li');
  list.appendChild(listItem);
  listItem.addEventListener('click', selectionListItem);
  listItem.addEventListener('dblclick', crossOutListItem);
  
  return listItem;
}

// Armazenar o texto escrito na lista
const typedText = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');

function inputText() {
  const textListItem = createListItem();
  textListItem.innerText = typedText.value;
  typedText.value = '';
}

taskButton.addEventListener('click', inputText);

// Apaga itens da lista
const clearButton = document.querySelector('#apaga-tudo');

function deleteListItens() {
  list.innerHTML = '';
}

clearButton.addEventListener('click', deleteListItens);

// Remove itens riscados
const removeButton = document.querySelector('#remover-finalizados');

function removeCrossOutItem() {
  const completedItem = document.querySelectorAll('.completed');
  completedItem.forEach(item => { // utilizei como referência o código do devDavielCespedes
    list.removeChild(item);
  })
}

removeButton.addEventListener('click', removeCrossOutItem);
