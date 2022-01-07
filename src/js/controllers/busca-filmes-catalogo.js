class ControllerCatalogo {
  constructor() {
    this.filmes = [
      "Sing 2",
      "Shrek",
      "Toy Story",
      "Moana",
      "Le Voyage De Chihiro",
      "50 first dates",
      "Epic Movie",
      "Home Alone",
      "Meet the parents",
      "Free guy",
      "Running Scared",
      "Maze runner",
      "The green mile",
      "The Avengers",
      "Jurassic World",
    ];
    this.posterFilmes = [];
  }
  mostraPoster() {
    this.filmes.forEach((filme) => {
      const model = new Model();
      model.requisicao(filme);
      const info = {
        poster: model.poster_filme,
        nomeFilme: filme,
      };
      this.posterFilmes.push(info);
    });
    console.log(this.posterFilmes);
    const view = new View();
    view.mostraPoster(this.posterFilmes);
  }
}

$(document).ready((e) => {
  const controller = new ControllerCatalogo();
  controller.mostraPoster();
});

/* var botao = document.querySelector(".form__submit");
var filme = document.getElementById("mySearch");
var filme1 = document.getElementById("mySearch").value;

botao.addEventListener("click", () => {
  enviar();
});

function enviar() {
  sessionStorage.setItem("item_pesq", filme.value);
  location.href = "./informacoes.html";
}

function homeFilme(filme1) {
  sessionStorage.setItem("item_pesq", filme1);
  location.href = "./informacoes.html";
}

$(document).keypress(function (e) {
  if (e.which == 13) {
    $(".form__submit").click();
  }
}); */
