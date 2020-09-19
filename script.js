class TodoListController {
  constructor() {
    this.lista = [];
    this.idEdicao = null;
    this.geradorDeId = 0;
  }

  lerTarefa() {
    let tarefa = {};
    tarefa.descricao = document.getElementById("texto-tarefa").value;
    tarefa.concluida = false;

    return tarefa;
  }

  validar(tarefa) {
    if (tarefa.descricao == "") {
      alert("O campo de descrição da tarefa é obrigatório!");
      return false;
    }

    return true;
  }

  adicionarTarefa() {
    console.log("tarefa sendo adiconada!!!");
    let tarefaRetornada = this.lerTarefa();

    if (this.validar(tarefaRetornada)) {
      if (this.idEdicao == null) {
        this.adicionar(tarefaRetornada);
      } else {
        this.salvarEdicao(tarefaRetornada);
      }

      this.limpar();
      this.construirTarefa();
    }
  }

  salvarEdicao() {}

  adicionar(tarefa) {
    tarefa.id = this.geradorDeId;
    this.geradorDeId++;

    this.lista.push(tarefa);
  }

  limpar() {
    document.getElementById("texto-tarefa").value = "";
    this.idEdicao = null;
  }
/* 
  construirLista() {
    let tabela = document.getElementById("lista-tarefas");
    tabela.innerHTML = "";

    for (let i = 0; i < this.lista.length; i++) {
      let linha = tabela.insertRow();

      let celulaConcluida = linha.insertCell();
      let celulaDescricao = linha.insertCell();

      let imgConcluida = document.createElement("img");

      celulaDescricao.innerText = this.lista[i].descricao;

      if (this.lista[i].concluida) {
        imgConcluida.src = "img/checked.svg";
      } else {
        imgConcluida.src = "img/unchecked.svg";
      }

      imgConcluida.setAttribute(
        "onclick",
        `controller.alterarStatus(${this.lista[i].id})`
      );

      celulaConcluida.appendChild(imgConcluida);
    }
  } */

  construirTarefa(){
    let parent = document.getElementById("lista");
    
    var li = document.createElement("li");
    var text = document.createTextNode("consegui grande dia!!!");
    li.appendChild(text);
    parent.firstElementChild.appendChild(li);
     }
   

  excluir(id) {
    if (confirm("Tem certeza que deseja excluir essa tarefa?")) {
      let i = 0;
      let achou = false;

      while (i < this.lista.length && !achou) {
        if (this.lista[i].id == id) {
          achou = true;
        } else {
          i++;
        }
      }

      if (achou) {
        this.lista.splice(i, 1);
        this.construirTarefa();
      }
    }
  }

  apagarTudo(){
    let tabela = document.getElementById("lista-tarefas");
    tabela.innerHTML = '';
    this.lista=[];
  }
 

  alterarStatus(id) {
    if (confirm("Tem certeza que deseja alterar o status dessa tarefa?")) {
        let i = 0;
        let achou = false;

        while (i < this.lista.length && !achou) {
            if (this.lista[i].id == id) {
                achou = true
                this.lista[i].concluida = !this.lista[i].concluida
            } else {
                i++
            }
        }

        this.construirLista();

    }
  }

  editar(id) {}

  selecionar(id){ 
    listItem.addEventListener('click', function () {
      const selectedItem = document.querySelector('.selected');
      if (selectedItem) {
        selectedItem.classList.remove('selected');
      }
      listItem.classList.add('selected');
    });

  }
  completarTarefa(){
   
    this.lista.addEventListener('dblclick', function () {
      if (lista.classList.contains('completed')) {
        lista.classList.remove('completed');
      } else {
        lista.classList.add('completed');
      }
    });
  }

  moverParaCima() {
    const btnMoveUp = document.querySelector('#mover-cima');
    btnMoveUp.addEventListener('click', function () {
      let allList = document.querySelector('ol').innerHTML;
      for (let index = 0; index < allList.length; index += 1) {
        const nListSelected = allList[index];
        if (nListSelected.classList.contains('selected')) {
          nListSelected.insertBefore(nListSelected, nListSelected.previousElementSibling);
        }
      }
  
    });

  }
  moverParaBaixo(id) {


  }



 
  




}

const controller = new TodoListController();
