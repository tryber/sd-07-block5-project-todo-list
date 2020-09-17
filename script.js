let btCreate = document.getElementById("criar-tarefa");
let inpuText = document.getElementById("texto-tarefa");
let orderList = document.getElementById("lista-tarefas");
let btErase = document.getElementById("apaga-tudo");
let btFinalized = document.getElementById("remover-finalizados");

btCreate.addEventListener("click", function(){
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(inpuText.value);  // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    orderList.appendChild(node);
    node.classList.add('item-list')
    inpuText.value ='';
    
});

orderList.addEventListener("click" , function(event){
    let anterior = document.querySelector(".selecionado");
    if(anterior != null){
        anterior.classList.remove("selecionado");
    }
    let register = event.target;
    register.classList.add("selecionado")
    
});
orderList.addEventListener('dblclick', function (event) {
    event.target.classList.toggle("completed");
});

btErase.addEventListener("click", function(){
    let orderList = document.querySelectorAll(".item-list");
    for(let i = 0; i < orderList.length; i += 1){
        orderList[i].remove();
    }
});
btFinalized.addEventListener("click", function(){
    let orderList = document.querySelectorAll(".completed");
    for(let i = 0; i < orderList.length; i += 1){
        orderList[i].remove();
    }
});