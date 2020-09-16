let pressButtonCreate = document.querySelector("#criar-tarefa");
let inputValue = document.querySelector("#texto-tarefa");
let itemList = document.querySelectorAll("li");
let pressButtonErase = document.querySelector("#apaga-tudo");
let pressBUttonCompleteTask = document.querySelector("#remover-finalizados")

pressButtonCreate.addEventListener('click', function(){
    if(inputValue.value != ""){
        let newItem = document.createElement('li');
        newItem.innerText = inputValue.value;
        document.querySelector('#lista-tarefas').appendChild(newItem);
        inputValue.value = "";
        newItem.addEventListener("click", addBackgroundItem);
        newItem.addEventListener("dblclick", addLineThroughItem);
        itemList = document.querySelectorAll("li");
        
    }
});

pressBUttonCompleteTask.addEventListener('click', function(){
    for (let index = 0; index < itemList.length; index += 1){
        if(itemList[index].className === "completed"){
            itemList[index].remove();
        }
    }
});

pressButtonErase.addEventListener('click', function(){
    for (let index = 0; index < itemList.length; index += 1){
        itemList[index].remove();
    }
});

function eraseBackground (){
    for(let index = 0; index < itemList.length; index += 1){
        if(itemList[index].style.backgroundColor === 'rgb(128, 128, 128)'){
            itemList[index].style.backgroundColor = "white";
        }
    }
}

function addBackgroundItem (){
    eraseBackground();   
    if(event.target.style.backgroundColor != 'rgb(128, 128, 128)'){       
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }else {
        event.target.style.backgroundColor = "white";
    }  
    
}

function addLineThroughItem (){
    if(event.target.className != "completed"){   
        event.target.classList.add("completed");
    }else {
        event.target.classList.remove("completed");
     }
}