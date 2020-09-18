let listOrdered = document.querySelector("#lista-tarefas");
let selectedjob = document.querySelector(".selected");


document.querySelector("#criar-tarefa").addEventListener("click", function(){
    let inputText = document.createTextNode(document.querySelector("#texto-tarefa").value);
    let listItem = document.createElement("li");
    selectedjob = document.querySelector(".selected");
    listItem.appendChild(inputText);
    listItem.classList.add("list-item");
    listItem.addEventListener("click",function(){
        if (listItem.classList[1] == "selected") {
            listItem.classList.remove("selected");
        } else {
            if (selectedjob == null ) {
            listItem.classList.add("selected")
            selectedjob = document.querySelector(".selected");
            } else {
            selectedjob.classList.remove("selected");
            listItem.classList.add("selected"); 
            selectedjob = document.querySelector(".selected");   
            }
        }
    })
    listItem.addEventListener("dblclick", function(){
        if (document.querySelector(".completed") !== null) {
        let taskfinished = document.querySelector(".completed");
        if (listItem.classList[1] == "completed" || listItem.classList[2] == "completed") {
            listItem.classList.remove("completed");
            } 
            else {
                listItem.classList.add("completed");
            }
    } else {
        listItem.classList.add("completed")
    }
        
    })
    listOrdered.appendChild(listItem);
    document.querySelector("#texto-tarefa").value = "";
})

document.querySelector("#apaga-tudo").addEventListener("click", function(){
    document.querySelectorAll("li").forEach(item => {
        item.parentNode.removeChild(item);
})
})

document.querySelector("#remover-finalizados").addEventListener("click",function(){
    document.querySelectorAll(".completed").forEach(item => {
        item.parentNode.removeChild(item);})
    })