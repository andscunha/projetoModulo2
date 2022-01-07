class View {
  sucesso(respostaApi) {
    $("#titulo").html(`${respostaApi.titulo}`);
    $("#diretor").html(`Diretor: ${respostaApi.diretor}`);
    $("#ano").html(`Ano: ${respostaApi.ano}`);
    $("#lancamento").html(`Lançamento: ${respostaApi.lancamento}`);
    $("#duracao").html(`Duração: ${respostaApi.duracao}`);
    $("#genero").html(`Gênero: ${respostaApi.genero}`);
    $("#atores").html(`Atores: ${respostaApi.atores}`);
    $("#sinopse").html(`Sinopse: ${respostaApi.sinopse}`);
    $("#avaliacao-imdb").html(`Avaliação IMDB: ${respostaApi.avaliacao_imdb}`);
    $("#poster-filme").attr("src", respostaApi.poster_filme);
  }

  erro(error) {
    $("#diretor").empty();
    $("#ano").empty();
    $("#lancamento").empty();
    $("#duracao").empty();
    $("#genero").empty();
    $("#atores").empty();
    $("#sinopse").empty();
    $("#avaliacao-imdb").empty();
    $("#poster-filme").empty();
    $("#titulo").html(`${error}`);
    $(".posicao").css({ bottom: "0", position: "fixed", width: "100%" });
    $("#assistir").css({ display: "none" });
    $(".erro").css({ display: "flex" });
  }

  assistir() {
    alert("Em desenvolvimento");
  }

  mostraPoster(listaFilmes) {
    let contador = 1;
    listaFilmes.forEach((filmes) => {
      $(`#n${contador}`)
        .attr("src", filmes.poster)
        .attr("onclick", `buscaFilmes("${filmes.nomeFilme}")`);
      contador++;
    });
  }
}
