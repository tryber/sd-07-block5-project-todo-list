let goalText = document.getElementById('texto-tarefa');
let goalList = document.getElementById('lista-tarefas');
let goalsItens = document.getElementsByTagName('li')

let addGoalButton = document.getElementById('criar-tarefa');
let addGoalToList = addGoalButton.addEventListener('click', addGoal);

let removeGoals = document.getElementById('apaga-tudo');
let removeGoalsItens = removeGoals.addEventListener('click', removeAllGoals);

let removeComplet = document.getElementById('remover-finalizados');
let removeCompletItens = removeComplet.addEventListener('click', removeAllComplet);

function addGoal() {
    let goalTextToAdd = document.createElement('li')
    goalTextToAdd.innerHTML = goalText.value
    goalList.appendChild(goalTextToAdd)
    goalTextToAdd.addEventListener('click', selectedItem)
    goalTextToAdd.addEventListener('dblclick', completItem)
    goalText.value = ''
}

function selectedItem() {
    let elementTarget = this

    if (elementTarget.classList.contains('selected')) {
        elementTarget.classList.remove('selected')
    } else {
        let listItens = document.getElementsByTagName('li')
        for (let index = 0; index < listItens.length; index += 1) {
            if (listItens[index].classList.contains('selected')) {
                listItens[index].classList.remove('selected')
            }
        }
        elementTarget.classList.add('selected')
    }
}

function completItem() {
    let elementTarget = this

    if (elementTarget.classList.contains('completed')) {
        elementTarget.classList.remove('completed')
    } else {
        elementTarget.classList.add('completed')
    }
}

function removeAllGoals() {
    goalList.innerHTML = ''
}

function removeAllComplet() {
    document.querySelectorAll('.completed').forEach(function(removeCompletedItens) {
        removeCompletedItens.remove()        
    });
}