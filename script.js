window.onload = function() {

  let listAssignment = document.querySelector('#lista-tarefas');

  const buttonAd = document.querySelector('#criar-tarefa').addEventListener('click', function(){

  let textlist = document.querySelector('#texto-tarefa').value;
  let itemList = document.createElement('li');
  itemList.textContent = textlist;
  listAssignment.appendChild(itemList);
  document.querySelector('#texto-tarefa').value = '';

  itemList.addEventListener('click', function(){

      let selected = document.querySelector('.selected');
      selected ? selected.classList.remove('selected') : selected;
      itemList.classList.add('selected')

   })

  itemList.addEventListener('dblclick', function(e){

         if(e.target.classList.contains('completed')){

            itemList.classList.remove('completed');

          }else{

            itemList.classList.add('completed');

          }
        })

    })

btEmpty = document.querySelector('#apaga-tudo').addEventListener('click', function(){

    if(listAssignment.children.length > 0){
       listAssignment.innerHTML = '';
    }

})


const btnFinalizados = document.querySelector('#remover-finalizados');

btnFinalizados.addEventListener('click', removeCompleted);

function removeCompleted() {

let listAssignment = document.querySelector('#lista-tarefas');
let complete = document.querySelectorAll('li');

for (i = 0; i < complete.length; i ++){

    if(complete[i].classList.contains('completed')){

        listAssignment.removeChild(complete[i])

    }
  }

  }


}
