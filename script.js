let createBranchButton = document.getElementById("criar-tarefa");
let inputBranch = document.getElementById("texto-tarefa");
let listBranch = document.getElementById("lista-tarefas");

createBranchButton.addEventListener("click", function () {
    if (!(inputBranch.value === "")) {;
        let addBranch = document.createElement("li");
        addBranch.innerText = inputBranch.value;
        listBranch.appendChild(addBranch);
        inputBranch.value = "";
    }
    inputBranch.focus();
});

listBranch.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
        let classSelected = document.querySelector(".selected");
        if (classSelected != null) {
            classSelected.classList.remove("selected");
        }
        event.target.classList.add("selected");
    }
});
listBranch.addEventListener("dblclick", function (event) {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("finished");
    }

})
let clearBranch = document.getElementById("apaga-tudo");
clearBranch.addEventListener("click", function () {
    let deleteList = listBranch.querySelectorAll("li")
    for (let index = 0; index < deleteList.length; index++) {
        deleteList[index].remove();
    }
})
let removeBranch = document.getElementById("remover-finalizados");
removeBranch.addEventListener("click", function () {
    let deleteList = document.querySelectorAll(".finished")
    for (let index = 0; index < deleteList.length; index++) {
         deleteList[index].remove();  
    }
})