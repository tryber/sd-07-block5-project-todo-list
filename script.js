let btCriarTarefa = document.getElementById('criar-tarefa');
let inpTextoTarefa = document.getElementById('texto-tarefa');
let olListaTarefa = document.getElementById('lista-tarefas');

btCriarTarefa.addEventListener('click', function () {
    // Testar se input tem conteudo
    // criar li
    // conteudo dentro da li
    //add li como filha da ol
    //apagar campo input
   //colocar o foco no input 
   if (inpTextoTarefa.value ) {
   let liTag = document.createElement('li');
    liTag.innerText = inpTextoTarefa.value
   // let text = document.getElementById('texto-tarefa');
   //liTag.appendChild(text)
    olListaTarefa.appendChild(liTag);
    inpTextoTarefa.value = '';
}
inpTextoTarefa.focus();
});

olListaTarefa.addEventListener('click', function (event) {
    if(event.target.tagName == 'LI'){
    let liSelecionada = document.querySelector('.selected');
    console.log(liSelecionada)
    if(liSelecionada !== null) { 
        liSelecionada.classList.remove('selected')
    }
    event.target.classList.add('selected');
}
})
// add escuta li clicada
// add escuta ol
// criar uma classe liClicada com a cor
olListaTarefa.addEventListener('dblclick', function (event) {
// if(event.target.classList.contains('completed'){
//     event.target.classList.remove('completed');
// } else{
// event.target.classList.add('completed');
// }

    if(event.target.tagName == 'LI'){
    event.target.classList.toggle('completed');
    }
});
// if vefificar se o item clicado tem ou não a classe completed
// remover se tem que remover e add se tem que add
let btApagaTudo = document.getElementById('apaga-tudo');
let btRemoverFinalizados = document.getElementById('remover-finalizados');

btApagaTudo.addEventListener('click', function(){
//while
//id e removed os li's
// for each
//inner|HTML = ''
olListaTarefa.innerHTML = '';
// let listaNova = document.querySelectorAll('ol > li')
// for (let i = 0; i < listaNova.length; i++) {
// olListaTarefa.firstChild.remove()
// }
 });
 btRemoverFinalizados.addEventListener('click', function(){
 //buscR PELA CLASS E MATAR TODOS
    let item = document.querySelectorAll('.completed');
    // for (let i (item.length -1); i >= 0; i--) {
    //   item[i].remove() 
    // }
    for (let i = 0; i < item.length; i++) {
      item[i].remove();
    }
 });