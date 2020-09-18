// Add a li in an ol and reset input text value;
const textInput = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
let orderedList = document.querySelector('.lista-tarefas');

addBtn.addEventListener('click', function () {
    let listItems = document.createElement('li');
    listItems.innerText = textInput.value;
    orderedList.appendChild(listItems);
    
    textInput.value = '';

    listItems.addEventListener('click', function () {
        let selected = document.querySelector('.selected');
            listItems.classList.toggle('selected')
    })

    listItems.addEventListener('dblclick', function(event) {
        let completed = document.querySelector('.completed');
    //     if (event.target.classList.contains('completed')) {
    //         event.target.classList.remove('completed');
    //     } else {
    //         event.target.classList.add('selected');
    // }     
    listItems.classList.toggle('completed');
    })
});

// Button delete all list's items
let deleteAllBtn = document.getElementById('apaga-tudo');

deleteAllBtn.addEventListener('click', function () {
    orderedList.innerHTML = '';
})
