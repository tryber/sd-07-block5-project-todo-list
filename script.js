let entradaTexto = document.querySelector('#texto-tarefa')
let botaoTarefa = document.querySelector("#criar-tarefa")
let listaTarefas = document.querySelector("#lista-tarefas")
let botaoApagarLista = document.querySelector("#apaga-tudo")
let botaoApagarRiscado = document.querySelector("#remover-finalizados")
let botaoSalvarTarefas = document.querySelector("#salvar-tarefas")
let botaoRemoveSelecionado = document.querySelector("#remover-selecionado")
let botaoCIma = document.querySelector("#mover-cima")
let botaoBaixo = document.querySelector("#mover-baixo")

//adicionar tarefa e chamar funçoes de um e dois clicks
botaoTarefa.addEventListener('click', function(){
    let novoElemento = document.createElement("li")
    if(entradaTexto.value == ""){
      window.alert('Entrada vazia')
    }
    else{
      novoElemento.innerHTML = entradaTexto.value
    novoElemento.classList.add("list-group-item")
    listaTarefas.appendChild(novoElemento)  
    novoElemento.addEventListener('click', selecionarItem);// se o novo elemento for clicado a funçao é chamada
    novoElemento.addEventListener('dblclick', riscarSelecionado)
    document.getElementById('texto-tarefa').value='';
    return novoElemento
    }
   
        
})

//bota de apagar tudo
botaoApagarLista.addEventListener('click', function(){
  listaTarefas.innerHTML = ''
})

//selecionar item um click , 
function selecionarItem(event) {
  TrocarSelecionado();
  event.target.classList.add('selected');//adicionar a classe selected
  
  //essa classe é colocada 
}
//funçao para deixar somente um selecionado de cada vez 
function TrocarSelecionado() {
  const item = document.querySelector('.selected');//se tiver a classe entra no item
  if (item !== null) item.classList.remove('selected');//se não for nulo remove a classe , o item permanece mais a classe é removida
}


//riscar selecionado dois clicks 
function riscarSelecionado(event){
  event.target.classList.add('completed')//no proprio novoElemento vai ser aplicado a funçao 
  let novoElementoRiscado = document.querySelector('.completed')
  console.log(novoElementoRiscado)
  novoElementoRiscado.addEventListener('dblclick', function(){
    if (novoElementoRiscado !== null) novoElementoRiscado.classList.remove('completed')

  })
  return novoElementoRiscado
}

//apagar selecionado de dois clicks 
botaoApagarRiscado.addEventListener('click' , function(){
  let listaRiscados = document.querySelectorAll('.completed')
  console.log(listaRiscados)
  if(listaRiscados.length !== 0){
    listaRiscados.forEach(function(cadaItem){ // com o for each eu tenho um loop onde eu aplico para cada item a funçao estabelecida
      listaTarefas.removeChild(cadaItem)
    })
    }
      
})
//remover selecionado de um click
botaoRemoveSelecionado.addEventListener("click",function(){
  let elementoSelecionado = document.querySelector('.selected')
  listaTarefas.removeChild(elementoSelecionado)

})


//guardar as tarefas 
function salvarTarefas() {
  localStorage.setItem('Tarefas', listaTarefas.innerHTML);
}

function pegarElementoSalvo() {
  listaTarefas.innerHTML = localStorage.getItem('Tarefas');
}
pegarElementoSalvo()
botaoSalvarTarefas.addEventListener("click" , salvarTarefas)


//funcoes para mover os itens 
botaoCIma.addEventListener('click',indoParaCima)
function indoParaCima() {
  let vaiParaCima = document.querySelector('.selected');
  if (vaiParaCima !== null){//se o elemento nao for nulo
    if (vaiParaCima.previousSibling !== null){ // se o proximo elemento tambem não for nulo
      vaiParaCima.after(vaiParaCima.previousSibling);//o elemento que foi selecionado vai para cima e o elemento no nó posterior vem baixo baixo
    }
  } 
  //previousSibling : Retorna o nó que precede o nó especificado na lista de childNodes do nó pai, retorna null se o nó especificado é o primeiro desta lista.
  //after o primeiro argumento é o elemento que vai ser colocado , e o que vai dentro da funçao é elemnto que vai ser subistituido o 
  //vaiParaCima.previousSibling é o nome subsequente ao mesmo 
}

botaoBaixo.addEventListener('click',indoParaBaixo)
function indoParaBaixo() {
  let vaiParaBaixo = document.querySelector('.selected');
  if (vaiParaBaixo !== null){//se o elemento nao for nulo
    if (vaiParaBaixo.nextSibling !== null){ // se o proximo elemento tambem não for nulo
      vaiParaBaixo.before(vaiParaBaixo.nextSibling);//o elemento que foi selecionado vai para baixo e o elemento no nó anterior vem apra cima
    }
  } 
  
}

entradaTexto.addEventListener('keydown', function(enter) {//assim que eu entrar com o texto no input ue ativo o evento keydow
    if(enter.which == 13){                                //e se a tecla apertada for 13 que é entere o meu botao criar tarefa será pressionado
      botaoTarefa.click()
    }

  
});
//https://pt.stackoverflow.com/questions/44796/colocar-clique-do-bot%C3%A3o-na-tecla-enter stack overflow

//target é sempre o elemento concreto que recebeu o click, descendente do elemento ao qual foi amarrado 
//o event handler caso o click tenha sido disparado nele. Há um outro parâmetro a ter em conta: bubbling (ou propagação do evento).
// document.body.insertBefore(divNova, divAtual); // uma forma de colocar uma div depois da outra



