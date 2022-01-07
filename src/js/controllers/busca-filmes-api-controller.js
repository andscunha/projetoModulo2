class Controller {
  pesquisarFilme(filme) {
    const model = new Model();
    const view = new View();
    model.requisicao(filme);
    console.log(model.error);
    if (model.error) {
      view.erro(model.error);
    } else {
      view.sucesso(model);
    }
  }
}

$("#buscar-filmes").on("click", () => {
  const controller = new Controller();

  window.location.href = `informacoes.html?nome=${$("#mySearch").val()}`;
  controller.pesquisarFilme($("#mySearch").val());
});

$(document).ready((e) => {
  const controller = new Controller();
  const parametrosUrl = new URLSearchParams(location.search);
  const nomeFilmeUrl = Object.fromEntries(parametrosUrl.entries());
  controller.pesquisarFilme(nomeFilmeUrl.nome);
});

$("#assistir").click(() => {
  const view = new View();
  view.assistir();
});

function buscaFilmes(filme) {
  const controller = new Controller();

  window.location.href = `informacoes.html?nome=${filme}`;
  controller.pesquisarFilme(filme);
}
