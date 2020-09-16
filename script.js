const addTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const apagar = document.querySelector('#apaga-tudo')

addTarefa.addEventListener('click', function () {
    const elementLi = document.createElement('li');
    elementLi.innerText = inputTarefa.value;
    elementLi.className = 'task';
    elementLi.classList.add('empty');
    list.appendChild(elementLi);
    addColor();
    completed();
    inputTarefa.value = ''
    emptyCheck();
})

apagar.addEventListener('click', function () {
    while(list.firstElementChild){
        list.removeChild(list.firstElementChild)
    }
})


function addColor () {
    const item = document.querySelectorAll('.empty')
    item.forEach(key => {
        key.addEventListener('click', function () {
            removeColor()
            key.style.backgroundColor = 'rgb(128 , 128 , 128)';
        })
})
}

function removeColor () {
    const item = document.querySelectorAll('.task')
    item.forEach(key => {
        key.style.backgroundColor = 'white';
})
}

function completed () {

    let item = document.querySelectorAll('.empty')
    item.forEach(key => {
    key.addEventListener('dblclick', function addEvent () {
        key.classList.remove('empty')
        key.classList.add('completed');
        if(key.style.textDecoration == 'line-through solid black'){
            key.classList.remove('completed')
            key.style.textDecoration = 'none';
        }
        else {
            key.style.textDecoration = 'line-through solid black';
        }
        })
    })
}

function emptyCheck () {
    let item = document.querySelectorAll('.empty')
    if(document.querySelectorAll('.empty')){
        item.forEach(key =>{
            key.classList.remove('empty')
        })
    }
}
