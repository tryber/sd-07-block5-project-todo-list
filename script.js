let botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener("click", function() {
    let inputTarefa = document.getElementById('texto-tarefa').value;
    criaTarefa(inputTarefa);
});

function criaTarefa(inputTarefa) {
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = inputTarefa;
    document.getElementById('lista-tarefas').appendChild(novaTarefa);
    document.getElementById('texto-tarefa').value = '';
    permiteSelecionarItem(novaTarefa);
    permiteMarcarComoConcluída(novaTarefa);
}

function permiteSelecionarItem(tarefa) {
    tarefa.addEventListener("click", function() {
        document.querySelectorAll('li').forEach(removeClassSelected);
        tarefa.classList.add('selected');
    });
}

function removeClassSelected(item) {
    item.classList.remove('selected');
}

function permiteMarcarComoConcluída(tarefa) {
    tarefa.addEventListener("dblclick", function(){
        if (tarefa.classList.contains('completed')){
            tarefa.classList.remove('completed');
        }
        else {
            tarefa.classList.add('completed');
        }
    });
}

let botaoApagaTudo = document.getElementById('apaga-tudo');
botaoApagaTudo.addEventListener("click", function() {
    document.getElementById('lista-tarefas').innerHTML = '';
});

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
botaoRemoverFinalizados.addEventListener("click", function() {
    document.querySelectorAll('.completed').forEach(function(item) {
        item.remove();
    });
});  

let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener("click", function() {
    localStorage.clear();
    let listaDeTarefas = document.getElementById('lista-tarefas');
    localStorage.setItem("lista de tarefas", listaDeTarefas.innerHTML);
});

window.onload = mostrarListaSalva;
function mostrarListaSalva() {
    let listaSalva = localStorage.getItem('lista de tarefas');
    if (listaSalva != null) {
        document.getElementById('lista-tarefas').innerHTML = listaSalva;
        document.querySelectorAll('li').forEach(function(item) {
            permiteSelecionarItem(item);
            permiteMarcarComoConcluída(item);
        });
    }
}

let botaoRemoverSelecionado = document.getElementById('remover-selecionado');
botaoRemoverSelecionado.addEventListener("click", function() {
    let itemSelecionado = document.querySelector('.selected');
    itemSelecionado.remove();
});

let botaoMoverParaCima = document.getElementById('mover-cima');
botaoMoverParaCima.addEventListener("click", function() {
    let itemSelecionado = document.querySelector('.selected')
    let listaDeTarefas = document.getElementById('lista-tarefas');
    if (itemSelecionado != null && itemSelecionado.previousElementSibling != null) {
        listaDeTarefas.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
    }
});

let botaoMoverParaBaixo = document.getElementById('mover-baixo');
botaoMoverParaBaixo.addEventListener("click", function() {
    let itemSelecionado = document.querySelector('.selected')
    let listaDeTarefas = document.getElementById('lista-tarefas');
    if (itemSelecionado != null && itemSelecionado.nextElementSibling != null) {
        listaDeTarefas.insertBefore(itemSelecionado.nextElementSibling, itemSelecionado);
    }
});
