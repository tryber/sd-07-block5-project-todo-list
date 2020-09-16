let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let btnCriaTarefa = document.querySelector('#criar-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');
let btnFinalizados = document.querySelector('#remover-finalizados');
let btnSelecionado = document.querySelector('#remover-selecionado')
let btnMoverCima = document.querySelector('#mover-cima');
let btnMoverBaixo = document.querySelector('#mover-baixo');
let btnSalvaLista = document.querySelector('#salvar-tarefas');
let classeItem = [];



function criaItem(){
    if( campoInsertTarefa.value != ""){
        let item = 0;
        let lista = [];
        lista[item] = document.createElement('li');
        lista[item].innerText = campoInsertTarefa.value;
        lista[item].className = 'itens';
        criarLista.appendChild(lista[item]);
        campoInsertTarefa.value = ""; 
        classeItem = document.querySelectorAll('.itens');
        SelectComplet(lista[item]);
        selecionaItem(lista[item]);
        item ++;
    }
    else{
        alert('O campo está vázio, é necessário inserir uma tarefa!')
    }
}

btnCriaTarefa.addEventListener('click',criaItem);

// Apaga toda a lista

function limparLista(){
    console.log(criarLista.length);
    if(criarLista.length != undefined || classeItem.length != 0){
        for(let index = 0; index < classeItem.length ; index ++){
            criarLista.removeChild(classeItem[index]);
        };
        console.log(criarLista.length);
    }
    else{
        alert('Não tem itens nessa lista');
    }
};

btnApagaTudo.addEventListener('click', limparLista);


// Marca como tarefa completa

function SelectComplet(item){
    item.addEventListener('dblclick',function(){
        item.classList.toggle('completed');
    });
};


// Marca item selecionado

function selecionaItem(item){
    item.addEventListener('click',function(){
        for(let index = 0; index < classeItem.length ; index ++){
                classeItem[index].classList.remove('selected');
           }
           item.classList.toggle('selected');
    });
};

// Remove todos os itens completos

function removeFinalizados(){
    for(let index = 0; index < classeItem.length ; index ++){
        if(classeItem[index].classList.contains('completed')){
            criarLista.removeChild(classeItem[index]);
        }
    };
};

btnFinalizados.addEventListener('click',removeFinalizados);

// Remove apenas o item selecionado

function removeSelecionado(){
    for(let index = 0; index < classeItem.length ; index ++){
        if(classeItem[index].classList.contains('selected')){
            criarLista.removeChild(classeItem[index]);
        }
    };
};

btnSelecionado.addEventListener('click',removeSelecionado);


function MoverCima(){
    for(let index = 0; index < classeItem.length ; index ++){
        if(classeItem.length != 0 && classeItem[index].classList.contains('selected')){
            let itemProximo;
            let itemAtual;
            if(classeItem[index-1] != undefined){
                itemProximo = classeItem[index].innerText;
                itemAtual = classeItem[index-1].innerText;
                classeItem[index-1].innerText = itemProximo;
                classeItem[index-1].classList.toggle('selected');
                classeItem[index-1].classList.toggle('completed');
                classeItem[index].innerText = itemAtual;
                classeItem[index].classList.remove('selected');
                classeItem[index].classList.remove('completed');
            }
            else{
                alert('Este item não pode ser movido');
            }
        }
    }
};

btnMoverCima.addEventListener('click', MoverCima);


function MoverBaixo(){
    for(let index = 0; index < classeItem.length ; index ++){
        if(classeItem.length != 0 && classeItem[index].classList.contains('selected')){
            let itemAnterior;
            let itemAtual;
            if(classeItem[index+1] != undefined){
                itemAnterior = classeItem[index].innerText;
                itemAtual = classeItem[index+1].innerText;
                classeItem[index+1].innerText = itemAnterior;
                classeItem[index+1].classList.toggle('selected');
                classeItem[index+1].classList.toggle('completed');
                classeItem[index].innerText = itemAtual;
                classeItem[index].classList.remove('selected');
                classeItem[index].classList.remove('completed');

            }
            else{
                alert('Este item não pode ser movido');
            }
        }
    }
};

btnMoverBaixo.addEventListener('click', MoverBaixo);



function SalvaLista(){
    for(let index = 0; index < classeItem.length ; index ++){
        localStorage.setItem('item' + index, classeItem[index].outerHTML);
    }
}

window.onbeforeunload = RecuperaLista();

function RecuperaLista(){
    for(let index = 0; index < localStorage.length ; index ++){
        let itens = [];
        itens[index] = document.createElement('li');
        criarLista.appendChild(itens[index]);
        itens[index].outerHTML = localStorage.getItem('item' + [index]);
    }
}

btnSalvaLista.addEventListener('click', SalvaLista);