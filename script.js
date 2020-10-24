const btn = document.querySelector("#criar-tarefa");
btn.addEventListener("click", function () {

    let inputItem = document.querySelector("#texto-tarefa").value;
    createLi(inputItem);
    document.querySelector("#texto-tarefa").value = "";

});

function createLi(inputValue) {
    const ol = document.querySelector("#lista-tarefas");
    const li = document.createElement("li")
    li.innerText = inputValue;
    addEventDoubleClick(li);
    addEventClick(li);
    ol.appendChild(li);
}

function addEventClick(li) {
    li.addEventListener('click', function () {
        const selectedLi = document.querySelector(".select");
        if (selectedLi !== null) {
            selectedLi.classList.remove("select");
        }
        li.classList.add("select");
    });
}

function addEventDoubleClick(li) {
    li.addEventListener('dblclick', function () {
        if (li.classList.contains('completed')) {
            li.classList.remove('completed');
        } else {
            li.classList.add('completed');
        }
    });
}
const btnremove = document.querySelector("#apaga-tudo");
btnremove.addEventListener('click', function () {
    document.querySelector("#lista-tarefas").innerHTML = "";
});

const btnremovefinalizado = document.querySelector("#remover-finalizados");
btnremovefinalizado.addEventListener("click", function () {
    const allEnded = document.querySelectorAll(".completed");
    allEnded.forEach(li => li.remove());
    
});

const btnMoveUp = document.querySelector("#mover-cima");
btnMoveUp.addEventListener('click', function(){
    const itemSelect = document.querySelector(".select");
    const ol = document.querySelector("#lista-tarefas");
    if(itemSelect === null){
        alert("Nenhum item selecionado");
    } else{
        const previousLi = itemSelect.previousSibling;
        if(itemSelect === ol.firstChild){
            alert("Impossivel mover este item para cima");
        }else{
            ol.insertBefore(itemSelect, previousLi); 
        }
    }
});

const btnMoveDown = document.querySelector("#mover-baixo")
btnMoveDown.addEventListener('click', function(){
    const itemSelect = document.querySelector(".select");
    const ol = document.querySelector("#lista-tarefas");
    if(itemSelect === null){
        alert("Nenhum item selecionado");
    } else{
        const nextLi = itemSelect.nextSibling;
        if(itemSelect === ol.lastChild){
            alert("Impossivel mover este item para baixo");
        }else{
            ol.insertBefore(nextLi, itemSelect);
        }
    }
});

const btnremoveItem = document.querySelector("#remover-selecionado")

btnremoveItem.addEventListener('click', function(){
    const itemSelect = document.querySelector(".select")
    itemSelect.remove();
});
