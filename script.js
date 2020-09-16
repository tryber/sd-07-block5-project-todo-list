window.onload = function(){
  document.getElementById('criar-tarefa').addEventListener('click', function(){
    let lista = document.getElementById('lista-tarefas');
    let texto = document.getElementById('texto-tarefa');
    let li = document.createElement('li');
    li.textContent = texto.value;
    lista.appendChild(li);
    li.className = 'lista';
    texto.value = '';
    texto.focus();
    afterList(li);
  });

function afterList (li){
let lista = document.querySelectorAll('.lista');

  li.addEventListener('click', function(){
    let selectedList = document.querySelector('.selected');
    if (selectedList === null){
      li.classList.add('selected');
    } else {
    selectedList.classList.remove('selected');
    li.classList.add('selected');
    }
  });

  li.addEventListener('dblclick', function(){
    if (li.classList.contains('completed')){
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  });

  let apagar = document.querySelector('#apaga-tudo');
apagar.addEventListener('click', function(){
  let listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.removeChild(listaTarefas.children[index]);
});

let apagarFinalizados = document.querySelector('#remover-finalizados');
apagarFinalizados.addEventListener('click', function(){
  let listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.removeChild(listaTarefas.children[index]);
});


};


//.forEach(item => {
 // item.addEventListener('click', function(){
   // item.style.backgroundColor = 'grey';
    //console.log (item.style.backgroundColor);

 // });
//});


}
