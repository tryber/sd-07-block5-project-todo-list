const inputText = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.querySelector('#criar-tarefa');
const botaoLimpa = document.querySelector('#apaga-tudo');
const botaoCompleto = document.querySelector('#remover-finalizados');
const botaoSalvar = document.querySelector('#salvar-tarefas');
const botaoRemover = document.querySelector('#remover-selecionado');
const botaoCima = document.querySelector('#mover-cima');
const botaoBaixo = document.querySelector('#mover-baixo');

function criaLista(text) {
  if (text.value === '') {
    alert('Preencha os campos');
  } else {
    const criarLista = document.createElement('li');
    criarLista.innerText = text.value;
    lista.appendChild(criarLista);
    text.value = '';
  }
}

function selected() {
  const listada = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listada.length; index += 1) {
    listada[index].addEventListener('click', () => {
      for (let sel = 0; sel < listada.length; sel += 1) {
        if (listada[sel].className === 'selected' ||
        listada[sel].className === 'completed') {
          listada[sel].classList.remove('selected');
          listada[sel].style.backgroundColor = '';
        }
      }
      if (listada[index].className === 'completed') {
        listada[index].className = 'completed';
      } else {
        listada[index].className = 'selected';
      }
      if (listada[index].className === 'completed' ||
      listada[index].className === 'selected') {
        listada[index].style.backgroundColor = 'rgb(128,128,128)';
      }
    });
  }
}

lista.addEventListener('dblclick', (event) => {
  if (event.target.className === 'completed') {
    event.target.className = 'selected';
  } else {
    event.target.className = 'completed';
  }
});

adicionar.addEventListener('click', function () {
  criaLista(inputText);
  selected();
});

botaoLimpa.addEventListener('click', function () {
  const listada = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listada.length; index += 1) {
    if (listada.length > 0) {
      listada[index].remove();
    }
  }
});

botaoCompleto.addEventListener('click', function () {
  const listada = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listada.length; index += 1) {
    if (listada[index].className === 'completed') {
      listada[index].remove(document.getElementsByClassName('completed'));
    }
  }
});

botaoSalvar.addEventListener('click', () => {
  const listada = document.querySelectorAll('#lista-tarefas li');
  const todo = [];
  for (let index = 0; index < listada.length; index += 1) {
    /*
    Retorna as tags e todos nomes de atributos da tag
    */
    todo.push(listada[index].outerHTML);
  }
  localStorage.setItem('lista-todos', JSON.stringify(todo));
});

function render() {
  const listTodo = JSON.parse(localStorage.getItem('lista-todos'));
  if (listTodo !== null) {
    for (let index = 0; index < listTodo.length; index += 1) {
      lista.innerHTML += listTodo[index];
    }
    selected();
  }
}
window.onload = render;

botaoRemover.addEventListener('click', function () {
  const listada = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listada.length; index += 1) {
    if (listada[index].className === 'selected') {
      listada[index].remove(document.getElementsByClassName('selected'));
    }
  }
});

botaoCima.addEventListener('click', function () {
  const listada = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listada.length; index += 1) {
    if (listada[index].className === 'selected') {
      if (listada[index].previousElementSibling === null) {
        alert('Você é o primeiro!');
      } else {
        listada[index].previousElementSibling.before(listada[index]);
      }
    }
  }
});

botaoBaixo.addEventListener('click', function () {
  const move = document.querySelector('.selected');
  if (move !== null) {
    if (move.nextElementSibling === null) {
      alert('Você é o ultimo!');
    } else {
      const baixo = move.nextElementSibling;
      move.before(baixo);
    }
  }
});
