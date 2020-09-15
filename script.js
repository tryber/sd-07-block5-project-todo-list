let list = document.getElementById('lista-tarefas');
let buttonCreate = document.getElementById('criar-tarefa');
let buttonUp = document.getElementById('mover-cima');
let buttonDown = document.getElementById('mover-baixo');
let buttonRemoveSelected = document.getElementById('remover-selecionado');
let buttonClearAll = document.getElementById('apaga-tudo');
let butttonClearCompleted = document.getElementById('remover-finalizados');
let buttonSave = document.getElementById('salvar-tarefas');

list.innerHTML = localStorage.getItem('listSaved');
  
function createItem(item) {
    let liItem = document.createElement('li');
    liItem.innerText = item;
    list.appendChild(liItem);
}

function addItem() {
    let input = document.getElementById('texto-tarefa');
    let newItem = input.value;
    createItem(newItem);
    input.value = '';
}

buttonCreate.addEventListener('click', addItem);

function addEventLastLi() {
    let lastLi = document.getElementById('lista-tarefas').lastChild;
    lastLi.addEventListener('click', function () {
        if (document.querySelector('.selected') !== null) {
            let selected = document.querySelector('.selected');
            selected.classList.remove('selected');
            lastLi.classList.add('selected');
        } else {
            lastLi.classList.add('selected');
        }
    })
}

buttonCreate.addEventListener('click', addEventLastLi);

function lineTrough() {
    let lastLi2 = document.getElementById('lista-tarefas').lastChild;
    lastLi2.addEventListener('dblclick', function () {
        if (lastLi2.classList.contains('completed') === true) {
            lastLi2.classList.remove('completed');
        } else {
            lastLi2.classList.add('completed');
        }
    });
}

buttonCreate.addEventListener('click', lineTrough);


buttonClearAll.addEventListener('click', function () {
    listLength = list.childNodes.length;
    for (index = 0; index < listLength; index += 1) {
        list.removeChild(list.firstChild);
    }
});

butttonClearCompleted.addEventListener('click', function () {
    let itemsCompleted = document.querySelectorAll('.completed');
    let completedLength = itemsCompleted.length;
    for (index = 0; index < completedLength; index += 1) {
        itemsCompleted = document.querySelectorAll('.completed');
        list.removeChild(itemsCompleted[0]);
    }
});

buttonSave.addEventListener('click', function () {
    localStorage.setItem('listSaved', list.innerHTML)
});

buttonUp.addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    if (selected !== null) {
        if (selected.previousSibling !== null) {
            list.insertBefore(selected, selected.previousSibling);
        }
    }
});

buttonDown.addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    if (selected !== null) {
        if (selected.nextSibling !== null && selected !== null) {
            list.insertBefore(selected.nextSibling, selected);
        }
    }
});

buttonRemoveSelected.addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    list.removeChild(selected);
});
