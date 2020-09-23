let textoTarefa = document.getElementById("texto-tarefa");
let criarTarefa = document.getElementById("criar-tarefa")
let listaTarefa = document.getElementById("lista-tarefas")
let apagarTudo = document.getElementById("apaga-tudo");
let apagadorSelecionados = document.getElementById("remover-finalizados")


criarTarefa.addEventListener('click', criarItem);
apagarTudo.addEventListener('click', apagador);
apagadorSelecionados.addEventListener('click' , apagadorDeSelecionados)


function criarItem (){   
    let li =document.createElement("li");
    li.innerText = textoTarefa.value;
    li.addEventListener('click' , colorir); /*https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event double click do evento abaixo*/
    li.addEventListener('dblclick' , rachadura) /*nao vou precisar fazer o mesmo que o colorir, pois ele pode ter mais de um elemento*/
    listaTarefa.appendChild(li);
    apagarTexto();
}

function colorir(){
    let seletor = document.querySelector(".selected")
        if(seletor !== null){
            seletor.classList.remove("selected");/*trocar os itens do selected, se ja existir*/
        }
    event.target.classList.add("selected"); 
}

function rachadura (){
    event.target.classList.toggle("completed"); /*https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList*/
}
function apagarTexto (){
    return textoTarefa.value = "" /*testes para fazer com essa funcao, usar ela junto com a criar item, acho que pode ser mais bem utilizada */
}

function apagador(){
    let listaCompleta = document.querySelectorAll("li")
        for(i = 0 ; i < listaCompleta.length; i++ )
        listaTarefa.removeChild(listaCompleta[i]);
}
function apagadorDeSelecionados(){
    let selecionados = document.querySelectorAll(".completed")
        for(i = 0 ; i < selecionados.length; i++ ){
            listaTarefa.removeChild(selecionados[i]);
        }
}
    












