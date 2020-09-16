window.onload=function(){

    let botaoAdicionar=document.getElementById('criar-tarefa');
    let botaoApagaTudo=document.getElementById('apaga-tudo');
    let botaoApagaFinalizados=document.getElementById('remover-finalizados');
    let botaoApagaSelecionado=document.getElementById('remover-selecionado');
    let botaoSalvaLista=document.getElementById('salvar-tarefas');
    let botaoUp=document.getElementById('mover-cima');
    let botaoDown=document.getElementById('mover-baixo');
    let novaTarefa=document.getElementById('texto-tarefa');
    let listaTarefas=document.getElementById('lista-tarefas');
    let itemSelecionado=document.getElementsByClassName('selecionado')

    botaoAdicionar.addEventListener('click',function(){
        let tarefa=novaTarefa.value;
        adicionaTarefa(tarefa);
    })

    botaoApagaFinalizados.addEventListener('click',function(){
        for(let i=listaTarefas.childElementCount-1; i>=0; i-=1){
            if (listaTarefas.children[i].classList.contains('completed')){
                listaTarefas.children[i].remove();
            }
        }
    })

    botaoApagaTudo.addEventListener('click',function(){
        for(let i=listaTarefas.childElementCount-1; i>=0; i-=1){
            listaTarefas.children[i].remove();
        }
    })
    
    botaoSalvaLista.addEventListener('click', function(){
        localStorage.clear();
        //alert("entrei na function");
        let todosItens=document.getElementsByTagName('li');
            for(let index=0; index<todosItens.length; index+=1){
                //alert("entrei no for " + index);
                //localStorage.setItem(`item${index+1}-posicao`, index);
                localStorage.setItem(`item${index+1}-texto`, todosItens[index].innerText);
                if (todosItens[index].classList.contains('completed')){
                    localStorage.setItem(`item${index+1}-classe`, 'completed');
                }
                //console.log(todosItens[index].innerText)
            }
    })

    botaoApagaSelecionado.addEventListener('click',function(){
        itemSelecionado[0].remove();
    })

    botaoUp.addEventListener('click',function(){
        let selecionado=document.getElementsByClassName('selecionado');
        let todosItens=document.getElementsByTagName('li');
            for(let i=0; i<todosItens.length; i+=1){
                if (selecionado[0]===todosItens[i]){
                    if(i>0){
                        listaTarefas.insertBefore(selecionado[0],listaTarefas.childNodes[i-1]);
                    }
                }
            }
    })

    botaoDown.addEventListener('click',function(){
        let selecionado=document.getElementsByClassName('selecionado');
        let todosItens=document.getElementsByTagName('li');
            for(let i=todosItens.length-1; i>=0; i-=1){
                if (selecionado[0]===todosItens[i]){
                    if(i<todosItens.length-1){
                        //alert(`entrei no ultimo if ${i}`)
                        listaTarefas.insertBefore(selecionado[0],listaTarefas.childNodes[i+1].nextSibling);
                        //alert(listaTarefas.childNodes[i+1].innerText)
                    }
                }
            }
    })

    loadList();

    function loadList(){
        for(let i=1; i<=localStorage.length; i+=1){
            let texto='';
            let classe='';
                if(localStorage.getItem(`item${i}-texto`)){
                    texto=localStorage.getItem(`item${i}-texto`);
                        if(localStorage.getItem(`item${i}-classe`)){
                            classe=localStorage.getItem(`item${i}-classe`)
                        }
                }
            if (texto.length > 0 || classe.length > 0){                
                let adicionaTarefa=document.createElement('li');
                if (texto!==''){
                    adicionaTarefa.innerText=texto;                    
                }
                if (classe!==''){
                    adicionaTarefa.classList.add(classe);
                }
                listaTarefas.appendChild(adicionaTarefa);
            }
        }
    }

    function adicionaTarefa(tarefa){
        let adicionaTarefa=document.createElement('li');
        adicionaTarefa.innerText=tarefa;
        //adicionaTarefa.className='item-list';
        listaTarefas.appendChild(adicionaTarefa);
        novaTarefa.value='';
    }

    //Este bloco para mudar o cor do item selecionado foi inspirado no PR de CAROL BEZERRA
    listaTarefas.addEventListener('click',function(){
        let item=event.target

        //Limpa o nome de classes dos itens da lista
        for(let i=0; i<listaTarefas.childElementCount; i+=1){
            if (listaTarefas.children[i].classList.contains('selecionado')){
                listaTarefas.children[i].classList.remove('selecionado')
            }
        }

        //Adiciona a classe selecionado ao item clicado
        if (item.id != 'lista-tarefas'){
            item.classList.add('selecionado');
        }
    })
    //------------------------------------------------------------------------------------------

    //Este bloco é responsável pela funcionalidade de duplo clique que indica que a tarefa foi finalizada
    listaTarefas.addEventListener('dblclick',function(){
        let item=event.target

        //Limpa a classe completed caso ela já exista
            if (item.classList.contains('completed')){
                item.classList.remove('completed')
            } else {
                //Adiciona a classe completed ao item clicado
                    if (item.id != 'lista-tarefas'){
                        item.classList.add('completed');
                    }
                }                        
            })

}
