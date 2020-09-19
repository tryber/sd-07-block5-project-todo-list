const buttonComand = document.querySelector('#criar-tarefa');
const inputAdd = document.getElementById('texto-tarefa');
const organizedList = document.getElementById('lista-tarefas');

buttonComand.addEventListener ('click', function (){
  const addOnOl = document.createElement('li');
  organizedList.appendChild(addOnOl).innerText = inputAdd.value;
  inputAdd.value = '';

  const listSelect = document.querySelectorAll('li');

  for (let i = 0; i < listSelect.length; i += 1) {
    listSelect[i].addEventListener('click', function () {
      listSelect[i].classList.add('color');
      for (let j = 0; j < listSelect.length; j += 1) {
        if (listSelect[i] !== listSelect[j]) {
          listSelect[j].classList.remove('color');
        }
      }
    });
  }
  addOnOl.addEventListener('dblclick', function(){
    addOnOl.classList.toggle("completed"); //o elemento toggle alterna entra mostra e esconder o elemento selecionado
  });
  const buttonDone = document.getElementById('remover-finalizados');
  buttonDone.addEventListener('click', function () {
    const listDone = document.querySelectorAll('li');
    for (let i = 0; i < listDone.length; i += 1) {
      const listOk = listDone[i];
      if (listOk.classList.contains('completed')) {
        organizedList.removeChild(listOk);
      }
    }
  })
  const buttonSave = document.getElementById('salvar-tarefas')
  buttonSave.addEventListener('click', function () {
    localStorage.clear;
    let remanigList = document.querySelector('ol').innerHTML;
    localStorage.setItem('undoneList', remanigList);
  });
});

const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', function () {
  organizedList.innerHTML = '';
});

const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const listSize = document.getElementsByTagName('li');
const selected = document.getElementsByClassName('color');
moveUp.addEventListener("click", function () {
    if (listSize !== 0 && selected[0].previousElementSibling !== null) {
        organizedList.insertBefore(selected[0], selected[0].previousElementSibling); //A função insertBefore() recebe dois argumentos. O primeiro é o nó a ser inserido. O segundo argumento é o nó antes do qual esse nó vai ser inserido. Esse método é chamado no nó que vai ser o pai do novo nó e o segundo argumento deve ser filho desse nó pai. Se você passar null como segundo argumento, insertBefore() se comporta como appendChild() e insere no final.
    }
})
moveDown.addEventListener("click", function () {
    if (listSize !== 0 && selected[0].nextElementSibling !== null) {
        let movebaixo = organizedList.insertAdjacentElement("afterend", selected[0]); //A função insertBefore() recebe dois argumentos. O primeiro é o nó a ser inserido. O segundo argumento é o nó antes do qual esse nó vai ser inserido. Esse método é chamado no nó que vai ser o pai do novo nó e o segundo argumento deve ser filho desse nó pai. Se você passar null como segundo argumento, insertBefore() se comporta como appendChild() e insere no final.
        organizedList.appendChild(movebaixo)
    }
})
window.onload = function () {
    document.querySelector("ol").innerHTML = localStorage.getItem("undoneList")
}
