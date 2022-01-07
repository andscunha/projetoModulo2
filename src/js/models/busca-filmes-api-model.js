class Model {
  constructor() {
    this.titulo = "";
    this.diretor = "";
    this.ano = "";
    this.lancamento = "";
    this.duracao = "";
    this.genero = "";
    this.atores = "";
    this.sinopse = "";
    this.avaliacao_imdb = "";
    this.poster_filme = "";
    this.error = false;
  }

  requisicao(filme) {
    const requisicao = new XMLHttpRequest();
    requisicao.addEventListener("load", () => {
      if (requisicao.status == 200 && requisicao.readyState == 4) {
        const dados = JSON.parse(requisicao.responseText);
        if (dados.Response == "False") {
          this.error =
            "O filme não foi encontrado! Tente novamente pesquisando os títulos em Inglês.";
        } else {
          console.log(dados);
          this._atualizaFilmes(dados);
        }
      }
    });
    requisicao.open(
      "GET",
      `//www.omdbapi.com/?t=${filme}&apikey=b0df158e`,
      false
    );
    requisicao.send();
  }
  _atualizaFilmes(objetoFilme) {
    this.titulo = objetoFilme.Title;
    this.diretor = objetoFilme.Director;
    this.ano = objetoFilme.Year;
    this.lancamento = objetoFilme.Released;
    this.duracao = objetoFilme.Runtime;
    this.genero = objetoFilme.Genre;
    this.atores = objetoFilme.Actors;
    this.sinopse = objetoFilme.Plot;
    this.avaliacao_imdb = objetoFilme.Ratings[0].Value;
    this.poster_filme = objetoFilme.Poster;
    this.error = false;
  }
}

/* var filme1 = sessionStorage.getItem("item_pesq");
var assistir = document.getElementById("assistir");

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
      $("#assistir").css({ display: "none" });
      $(".erro").css({ display: "flex" });

      throw new Error(
        "O filme não foi encontrado! Tente novamente pesquisando os títulos em Inglês."
      );
    }
  } catch (error) {
    erro(error);
  }
} */
