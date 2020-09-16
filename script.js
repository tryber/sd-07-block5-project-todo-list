window.onload = function() {
    const criarTarefa = document.getElementById('criar-tarefa');
    const textoTarefa = document.getElementById('texto-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');
    const salvarTarefas = document.getElementById('salvar-tarefas');
    const apagaTudo = document.getElementById('apaga-tudo');
    const removerSelecionado = document.getElementById('remover-selecionado');
    /*------------------------------------------------------*/
    removerSelecionado.addEventListener('click', function(){     
        let selecionado = document.querySelector('.selecionado');
                if(selecionado){
                    selecionado.remove();                    
                }
                  
       });

    
    
    /*------------------------------------------------------*/
    apagaTudo.addEventListener('click', function(){     
        let todasTarefas = document.querySelectorAll('li');
        for(let index=0; index < todasTarefas.length; index +=1){
            todasTarefas[index].remove();                     
        }
        localStorage.clear();   
       });

    /*------------------------------------------------------*/
    salvarTarefas.addEventListener('click', function(){     
     let todasTarefas = document.querySelectorAll('li');
     for(let index=0; index < todasTarefas.length; index +=1){
         localStorage.setItem(index, todasTarefas[index].innerText);         
     }   
    });
    /*------------------------------------------------------*/

    criarTarefa.addEventListener('click', function(){
     let tarefa = textoTarefa.value;
     let novaTarefa = document.createElement('li');
     novaTarefa.innerText=tarefa;     
     listaTarefas.appendChild(novaTarefa);
     textoTarefa.value ="";
     textoTarefa.focus(); 
    /*-------------------------*/
    
    let todasTarefas = document.querySelectorAll('li');
        for(let index=0; index < todasTarefas.length; index +=1){
            /*-------------------------------------------------------*/           
            todasTarefas[index].addEventListener('click', function () {
                let selecionado = document.querySelector('.selecionado');
                if(selecionado){
                    selecionado.classList.remove('selecionado');
                    selecionado.style.backgroundColor ='transparent';
                } 
                this.classList.add('selecionado');                  
                this.style.backgroundColor = 'rgb(128, 128, 128)'; 
                                          
              });
            }
            /*-------------------------------------------------------*/
            for(let index=0; index < todasTarefas.length; index +=1){                
                todasTarefas[index].addEventListener('dblclick', function () {
                    if(this.style.textDecoration=="line-through"){
                        this.style.textDecoration='none';
                    }else{
                        this.style.textDecoration="line-through";  
                    }                                       
                  });
                
            }    
            
                     
    });

    /*xxxxxxxxxxxxxxxxxxxxxxx*/
    // iterate localStorage
    //https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
   
    for (let index = 0; index < localStorage.length; index += 1) {
        let key = localStorage.key(index);
        let value = localStorage.getItem(key);
        let novaTarefa = document.createElement('li');
        novaTarefa.innerText=value;
        listaTarefas.appendChild(novaTarefa);
        
        
    }
    /*-----------------------------------------------------------*/
    const todasTarefas = document.querySelectorAll('li');
    for(let index=0; index < todasTarefas.length; index +=1){        
        todasTarefas[index].addEventListener('click', function () {                     
            this.style.backgroundColor ='rgb(128, 128, 128)';                           
          });
        }
     
    
  };