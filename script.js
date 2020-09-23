let buttonCreate = document.getElementById('criar-tarefa')
let inputTexto = document.getElementById('texto-tarefa')
let listaTarefa = document.getElementById('lista-tarefas')

buttonCreate.addEventListener('click', function() {
    if (inputTexto.value !== '') {
        let liTag = document.createElement('li')
        liTag.innerText = inputTexto.value
        listaTarefa.appendChild(liTag)
        inputTexto.value = ''
    }
    inputTexto.focus()
})

listaTarefa.addEventListener('click', function(event) {
    if (event.target.tagName == 'LI') {
        let allLiSelected = document.querySelector('.selected')
        if(allLiSelected != null) {
            allLiSelected.classList.remove('selected')
        }
        event.target.classList.add('selected')
   }
})

listaTarefa.addEventListener('dblclick', function () {
    if (event.target.tagName == 'LI') {
        event.target.classList.toggle('completed')
    }
})

let btApagarTudo = document.getElementById('apaga-tudo')
let btRemoveFinalizados = document.getElementById('remover-finalizados')

btApagarTudo.addEventListener('click', function() {
    let clear = document.querySelectorAll('li')
    for (let i = 0; i < clear.length; i += 1) {
        clear[i].remove()
    }
})