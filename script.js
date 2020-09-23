// ADICIONA UM NOVO ITEM
$("#criar-tarefa").click(function () {
  if ($("#texto-tarefa").val() === "") {
    alert("Você deve digitar algo para ser adicionado a lista!");
  } else {
    $("#lista-tarefas").append(
      `<li class="item-lista">${$("#texto-tarefa").val()}</li>`
    );
    $("#texto-tarefa").val("");
  }
});

// SELECIONA UM ITEM DA LISTA E DESSELECIONA OS OUTROS
$("#lista-tarefas").on("click", "li", function (event) {
  $(".selected").removeClass("selected");
  $(event.target).addClass("selected");
});

// SELECIONA UM ITEM COM DOUBLE CLICK E O MARCA COMO TAREFA COMPLETA
$("#lista-tarefas").on("dblclick", "li", function (event) {
  $(event.target).toggleClass("completed");
});

// REMOVE OS FINALIZADOS
$("#remover-finalizados").click(function () {
  $(".completed").remove();
});

// TODO: SALVAR TAREFAS WEBSTORAGE
$("#salvar-tarefas").click(function () {
  for (let i = 0; i < $(".item-lista").length; i += 1) {
    console.log($(".item-lista")[i]);
  }
});

// REMOVE OS SELECIONADOS
$("#remover-selecionado").click(function () {
  $(".selected").remove();
});

// APAGA TUDO
$("#apaga-tudo").click(function () {
  $("#lista-tarefas").empty();
  $("#texto-tarefa").val("");
});
