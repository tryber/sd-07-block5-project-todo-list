window.onload = function() {
   document.getElementById("texto-tarefa").focus();
};

const btAdd = document.getElementById("criar-tarefa");
const btMvUp = document.getElementById("mover-cima");
const btMvDw = document.getElementById("mover-baixo");
const btSaveList = document.getElementById("salvar-tarefas");

btAdd.addEventListener('click', function() {
   const novaLi = adicionaTarefa();
novaLi.addEventListener('click', function(event) {
      mudaCorFundo(novaLi);
})
})
//adicionando tarefa
function adicionaTarefa(){
      const paiLista = document.getElementById("lista-tarefas"); 
      const novaLi = document.createElement("li");
      const textTarefa = document.getElementById("texto-tarefa").value;
      const cxInput = document.getElementById("texto-tarefa");

      if(textTarefa.length != ""){
         paiLista.appendChild(novaLi);
         novaLi.innerText = textTarefa;
         document.getElementById("texto-tarefa").value =""
      }
      document.getElementById("texto-tarefa").focus();
      return novaLi;     
}
  
//mudando a cor de fundo da li
function mudaCorFundo(novaLi){
   const li = Event.target
   const selected = document.querySelector(".selected");
   if (selected) {
      selected.classList.remove("selected");
   } 
      novaLi.classList.add("selected"); 
}

//completa terefa 
const olLista = document.getElementById('lista-tarefas');
olLista.addEventListener('dblclick', function(event) {
   if (event.target.tagName == 'LI') {
      event.target.classList.toggle('completed');
   }
})

//remover finalizados
const btRmvFinalizados = document.getElementById('remover-finalizados');
btRmvFinalizados.addEventListener('click', function () {
   const item = document.querySelectorAll('.completed');
   for (let i = 0; i < item.length; i += 1){
       item[i].remove();
   }
})

//apagar a lista
const btRmvAll = document.getElementById('apaga-tudo');
btRmvAll.addEventListener('click', function() {
   const olLista = document.querySelectorAll('ol > li');
   for (let i = 0; i < olLista.length; i+=1){
      olLista[i].remove();
   }
})

//remover selecionado
const btRmvSelect = document. getElementById('remover-selecionado');
btRmvSelect.addEventListener('click', function () {
   const item = document.querySelectorAll('.selected');
   for (let i = 0; i < item.length; i+=1){
      item[i].remove();
   }
})