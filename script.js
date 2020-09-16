const list = document.querySelector("#lista-tarefas");
const button = document.querySelector("#criar-tarefa");
const inputText = document.querySelector("#texto-tarefa");
const rmCompleted = document.querySelector("#remover-finalizados");
const rmAll = document.querySelector("#apaga-tudo");
const rmSelected = document.querySelector("#remover-selecionado");

// créditos pro Hercules Gabriel pela lógica da função deselectItem
function deselectItem(){
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    }
}

function selectItem() {
    deselectItem();
    event.target.classList.add('selected');
}

function toggleComplete(event){
    event.target.classList.toggle('completed');
}

function createListItem (){
    const listItem = document.createElement("li");
    listItem.innerText = inputText.value;
    if (inputText.value === '') {return alert('input vazio');}
    listItem.addEventListener("click", selectItem);
    listItem.addEventListener("dblclick", toggleComplete);
    list.appendChild(listItem);
    inputText.value = '';
}

function removeListItems(){
    let listElements = document.querySelectorAll("li");
    for (let index = 0; index < listElements.length; index += 1){
        listElements[index].remove();
    }
}

function removeCompletedItems(){
    let completedItems = document.querySelectorAll(".completed");
    for (let index = 0; index < completedItems.length; index += 1){
        completedItems[index].remove();
    }
}

function removeSelectedItem(){
    let selectedItems = document.querySelectorAll(".selected");
    for (let index = 0; index < selectedItems.length; index += 1){
        selectedItems[index].remove();
    }
}

button.addEventListener("click", createListItem);

rmAll.addEventListener("click", removeListItems);

rmCompleted.addEventListener("click", removeCompletedItems);

rmSelected.addEventListener("click", removeSelectedItem);