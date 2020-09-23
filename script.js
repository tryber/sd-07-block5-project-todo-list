const novaTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const removerSelecionado = document.getElementById('remover-selecionado');
const tarefas = document.getElementsByClassName('tarefas');
const lista = document.getElementById('lista-tarefas');
const salvarTarefas = document.getElementById('salvar-tarefas');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
let itemSelecionado = "";

criarTarefa.addEventListener('click', function () {
    if (novaTarefa.value == '') {
        alert("Digite uma tarefa.");
    } else {
        let tarefa = document.createElement('li');
        tarefa.textContent = novaTarefa.value;
        tarefa.classList.add('tarefas');
        lista.appendChild(tarefa);
        novaTarefa.value = "";
        tarefa.addEventListener('click', function () {
            if (itemSelecionado == tarefa) {
                tarefa.classList.remove("selected");
                itemSelecionado = "";
            } else {
                for (let i = 0; i < tarefas.length; i+=1) {
                    tarefas[i].classList.remove("selected");
                }
                tarefa.classList.add("selected");
                itemSelecionado = tarefa;
            }
        });
        tarefa.addEventListener('dblclick', function () {
            if (tarefa.classList.contains("completed")){
                console.log("teste");
                tarefa.classList.remove("completed");
            } else {
                tarefa.classList.add("completed");
            }
        });
    }
});

moverCima.addEventListener('click', function () {
    if (itemSelecionado == ""){
        alert ('selecione um item.');
    } else if (itemSelecionado == tarefas[0]){
        alert('Esse item já está na posição mais alta');
    } else {
        lista.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
    }
});

moverBaixo.addEventListener('click', function () {
    if (itemSelecionado == ""){
        alert ('selecione um item.');
    } else if (itemSelecionado == tarefas[tarefas.length -1]){
        alert('Esse item já está na posição mais baixa');
    } else {
        lista.insertBefore(itemSelecionado.nextElementSibling, itemSelecionado);
    }
  });

removerSelecionado.addEventListener('click', function (){
    for (let i = 0; i < tarefas.length; i+=1){
        if (tarefas[i].classList.contains("selected")){
            tarefas[i].remove();
        }
    }
    itemSelecionado = "";
});

removerFinalizados.addEventListener('click', function () {
    const finalizados = document.querySelectorAll(".completed");
    finalizados.forEach((item) => {
        lista.removeChild(item);
    });
});

apagaTudo.addEventListener('click', function () {
    lista.innerHTML = "";
    localStorage.clear();
});

salvarTarefas.addEventListener('click', function () {
  let listaSalva = [];
  for (let index = 0; index < tarefas.length; index += 1) {
    const conteudoTarefas = tarefas[index].innerText;
    let tarefasCompletas = false;
    if (tarefas[index].classList.contains('completed')) {
      tarefasCompletas = true;
    };
    let tarefasSalvas = {
      task: conteudoTarefas,
      completed: tarefasCompletas,
    };
    listaSalva.push(tarefasSalvas);
  }
  localStorage.setItem('Tasks', JSON.stringify(listaSalva));
});

if (localStorage.getItem('Tasks') !== null) {
    let listaJson = JSON.parse(localStorage.getItem('Tasks'));
    for (let index = 0; index < listaJson.length; index += 1) {
        let conteudoTarefas = listaJson[index].task;
        let tarefasCompletas = listaJson[index].completed;
        const tarefa = document.createElement('li');
        tarefa.innerText = conteudoTarefas;
        tarefa.classList.add('tarefas');
        if (tarefasCompletas === true) {
            tarefa.classList.add('completed');
        }
        lista.appendChild(tarefa);
        tarefa.addEventListener('click', function () {
            if (itemSelecionado == tarefa) {
                tarefa.classList.remove("selected");
                itemSelecionado = "";
            } else {
                for (let i = 0; i < tarefas.length; i+=1) {
                    tarefas[i].classList.remove("selected");
                }
                tarefa.classList.add("selected");
                itemSelecionado = tarefa;
            }
        });
        tarefa.addEventListener('dblclick', function () {
            if (tarefa.classList.contains("completed")){
                console.log("teste");
                tarefa.classList.remove("completed");
            } else {
                tarefa.classList.add("completed");
            }
        });
    }
}