function mostrarInformacoes(id) {
  const chave = "1c7d6d01";

  $.ajax({
    url: `https://www.omdbapi.com/?apikey=${chave}&i=${id}`,
    success: (info) => {
      $("#catalogo").css("display", "none");
      $("#carrossel").css("display", "none");
      $("#info-api").css("display", "flex");
      $("#poster-filme").attr("src", info.Poster);
      $("#titulo").html(`${info.Title}`);
      $("#genero").html(`Gênero: ${info.Genre}`);
      $("#ano").html(`Ano: ${info.Year}`);
      $("#duracao").html(`Tempo de Duração: ${info.Runtime}`);
      $("#diretor").html(`Diretor: ${info.Director}`);
      $("#atores").html(`Atores: ${info.Actors}`);
      $("#lancamento").html(`Data de Lançamento: ${info.Released}`);
      $("#sinopse").html(`Sinopse: ${info.Plot}`);
      $("#avaliacao-imdb").html(`Avaliação IMDB: ${info.imdbRating}`);
    },
  });
}
