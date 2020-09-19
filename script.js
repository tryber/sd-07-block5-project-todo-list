const buton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const remove = document.getElementById('remover-finalizados')
const apagaTudo = document.getElementById('apaga-tudo')
let cont = 0;
let frase = [];
//cria a lista to-do
buton.addEventListener('click', function(){
    let aFazer = document.querySelector("#texto-tarefa").value;
    frase[cont] = document.createElement("li");
    frase[cont].innerText = aFazer;
    list.appendChild(frase[cont]);
    let teste = document.querySelector("#texto-tarefa");
    teste.value = '';
    cont += 1;
})
//marca como feito
list.addEventListener('dblclick', function(){
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    }
    else event.target.classList.add('completed');
})
//seleciona
list.addEventListener('click', function(){
    if (document.querySelector('.selecionado') !== null) {
        document.querySelector('.selecionado').classList.remove('selecionado');
    }
    event.target.classList.add('selecionado');
})
//remove o que ja foi feito
remove.addEventListener('click', function(){
    for (let i = 0; i < cont; i += 1){
        if (frase[i].classList.contains('completed')) {
            list.removeChild(frase[i])
        }
        console.log(frase[i]);
    }
})
apagaTudo.addEventListener('click', function(){
    for (let i = 0; i < cont; i += 1){
        list.removeChild(frase[i])
    }
})
