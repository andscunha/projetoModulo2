//Models

var filme1 = sessionStorage.getItem("item_pesq");

async function apiFilme(filme1) {
  const chave = "b0df158e";
  let url = `https://www.omdbapi.com/?apikey=${chave}&t=${filme1}`;
  let respostaApi = await fetch(url).then((response) => response.json());
  console.log(respostaApi);
  try {
    if (respostaApi.Title !== undefined) {
      sucesso(respostaApi);
    } else {
      $(".posicao").css({ bottom: "0", position: "fixed", width: "100%" });
      throw new Error(
        "O filme não foi encontrado! Tente novamente pesquisando os títulos em Inglês."
      );
    }
  } catch (error) {
    erro(error);
  }
}

apiFilme(filme1);

// View
function sucesso(respostaApi) {
  $("#titulo").html(`${respostaApi.Title}`);
  $("#diretor").html(`Diretor: ${respostaApi.Director}`);
  $("#ano").html(`Ano: ${respostaApi.Year}`);
  $("#lancamento").html(`Lançamento: ${respostaApi.Released}`);
  $("#duracao").html(`Duração: ${respostaApi.Runtime}`);
  $("#genero").html(`Gênero: ${respostaApi.Genre}`);
  $("#atores").html(`Atores: ${respostaApi.Actors}`);
  $("#sinopse").html(`Sinopse: ${respostaApi.Plot}`);
  $("#avaliacao-imdb").html(`Avaliação IMDB: ${respostaApi.imdbRating}`);
  $("#poster-filme").attr("src", respostaApi.Poster);
}

function erro(error) {
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
}
