// 1)Define the variables:

let header = document.getElementsByTagName('header')[0];
let explanation = document.getElementById('funcionamento');
let textBox = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');
let button1 = document.getElementById('criar-tarefa');
let button2 = document.getElementById('apaga-tudo');
let button3 = document.getElementById('remover-finalizados');

// 2) Define the functions:

// To write the text in the list:
button1.addEventListener('click', function (event) {
  event.preventDefault(); // To prevent the form's request
  if (textBox.value !== "") {
    let newTask = document.createElement('li');
    newTask.innerText = textBox.value;
    list.appendChild(newTask);
    selectItem(newTask);
    doubleSelection(newTask)
    textBox.value = '';
  }
  else {
    alert("Error! Please, enter a valid text")
  }
});

// To select only one item of the list:
function selectItem(item) {
  let li = document.getElementsByTagName('li');
  item.addEventListener('click', function() {
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    item.classList.toggle('selected');
  });
}

// To complete a task using double-click:
function doubleSelection(item) {
  let li = document.getElementsByTagName('li');
  item.addEventListener('dblclick', function() {
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('selected');
    }
    item.classList.toggle('completed');
  })
}

// To clean the list:
button2.addEventListener('click', function (event) {
  event.preventDefault();
  while (list.lastChild) {
    list.removeChild(list.lastChild);
  }
});

// To clean completed taks only:
button3.addEventListener('click', function() {
  event.preventDefault();
  let completedItens = document.getElementsByClassName('completed');
  for (j = 0; j < completedItens.length; j += 0) {
    list.removeChild(completedItens[j]);
  }
})
