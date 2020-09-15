let btnAddList = document.getElementById('criar-tarefa');
let btnRemoveAll = document.getElementById('apaga-tudo');
let btnRemoveCompleted = document.getElementById('remover-finalizados');
let btnRemoveSelected = document.getElementById('remover-selecionado');
let list = document.getElementById('lista-tarefas');
let inputList = document.getElementById('texto-tarefa');

function addToList(){
  console.log(inputList.value);
  let newItem = document.createElement('li');

  newItem.innerText = inputList.value;
  newItem.className = 'item';
  list.appendChild(newItem);

  newItem.addEventListener('click', selectedItem);
  newItem.addEventListener('dblclick', completedItem);

  inputList.value = '';
}

function removeAll(){
  let items = document.querySelectorAll('li');

  for(let i = 0; i < items.length; i += 1){
    list.removeChild(items[i]);
  }

}

function selectedItem(e){
  let itemDone = e.srcElement;

  let itemPreviousSelected = document.querySelector('.selected');

  if(itemDone ===  itemPreviousSelected){
    itemPreviousSelected.classList.remove('selected');
    return;
  }

  if(itemPreviousSelected === null){
    itemDone.className += ' selected';
  }else{
    itemPreviousSelected.classList.remove('selected');
    itemDone.className += ' selected';
  }

}

function completedItem(e){
  let itemDone = e.srcElement;
  let name = itemDone.className;
  let completed = 'completed';

  if(name.includes(completed)){
    let auxName;

    auxName = name.split('completed');
    itemDone.className = auxName[0].trim();
  }else{
    itemDone.className += ' completed';
  }

}

function removeCompleted(){
  let items = document.querySelectorAll('.completed');

  if(items.length > 0){
    for( let i = 0; i < items.length; i += 1){
      list.removeChild(items[i]);
    }
  }

}

function removeSelected(){
  let items = document.querySelectorAll('.selected');

  if(items.length > 0){
    for( let i = 0; i < items.length; i += 1){
      list.removeChild(items[i]);
    }
  }

}

btnAddList.addEventListener('click', addToList);
btnRemoveAll.addEventListener('click', removeAll);
btnRemoveCompleted.addEventListener('click', removeCompleted);
btnRemoveSelected.addEventListener('click', removeSelected);
