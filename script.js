let lista = document.querySelector('#lista-tarefas');

salvarLocal(localStorage.getItem('tarefas'));

function salvarLocal(save) {
  if (save !== undefined) {
    lista.innerHTML = save;
    for (let u = 0; u < document.getElementsByTagName('li').length; u++) {
      let mano = document.getElementsByTagName('li')[u];
      mano.addEventListener('dblclick', () => {
        if (mano.classList.contains('completed')) {
          mano.classList.remove('completed');
        } else {
          mano.classList.add('completed');
        }
      });
    }
    for (let e = 0; e < document.getElementsByTagName('li').length; e++) {
      let mano = document.getElementsByTagName('li')[e];
      mano.addEventListener('click', () => {
        console.log('sdsd');
        for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
          document.getElementsByTagName('li')[i].style.backgroundColor =
            'white';
        }

        mano.style.backgroundColor = 'rgb(128, 128, 128)';
      });
    }
  }
}

//salvar tarefas
document.querySelector('.st').addEventListener('click', () => {
  localStorage.setItem('tarefas', lista.innerHTML);
  salvarLocal(localStorage.getItem('tarefas'));
});

//criar tarefa
document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const elementoLista = document.createElement('li');
  elementoLista.innerText = document.querySelector('#texto-tarefa').value;
  elementoLista.addEventListener('click', () => {
    for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
      document.getElementsByTagName('li')[i].style.backgroundColor = 'white';
    }

    elementoLista.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  elementoLista.addEventListener('dblclick', () => {
    if (elementoLista.classList.contains('completed')) {
      elementoLista.classList.remove('completed');
    } else {
      elementoLista.classList.add('completed');
    }
  });
  lista.appendChild(elementoLista);

  console.log(lista.innerHTML);

  document.querySelector('#texto-tarefa').value = ''; //reseta o input
});

//Apagar tudo
document.querySelector('#apaga-tudo').addEventListener('click', () => {
  document.querySelector('#lista-tarefas').innerHTML = '';
});

//apagar finalizados
document.querySelector('.rf').addEventListener('click', () => {
  for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
    if (
      document.getElementsByTagName('li')[i].classList.contains('completed')
    ) {
      document
        .getElementById('lista-tarefas')
        .removeChild(document.getElementsByTagName('li')[i]);
      i = 0;
    }
  }
});

//apagar selecionado
document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const elemento = document.getElementsByTagName('li');
  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      document.getElementById('lista-tarefas').removeChild(elemento[i]);
    }
  }
});

//mover pra cima
document.querySelector('#mover-cima').addEventListener('click', () => {
  const elemento = document.getElementsByTagName('li');
  for (let i = 1; i < elemento.length; i += 1) {
    if (elemento[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      lista.insertBefore(elemento[i], elemento[i - 1]);
    }
  }
});

//mover pra baixo
document.querySelector('#mover-baixo').addEventListener('click', () => {
  const elemento = document.getElementsByTagName('li');
  for (let i = 0; i < elemento.length - 1; i += 1) {
    console.log(elemento[i]);
    if (elemento[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      lista.insertBefore(elemento[i + 1], elemento[i]);
      console.log(elemento[i]);
      i = elemento.length;
    }
  }
});
