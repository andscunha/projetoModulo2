<<<<<<< HEAD
// Manipula input e chama requisição API

//controller
var botao = document.querySelector('.form__submit')
var filme = document.getElementById('mySearch');
var filme1 = document.getElementById('mySearch').value;

botao.addEventListener('click' ,()=>{
    enviar()
  
})

function enviar() {
    sessionStorage.setItem("item_pesq", filme.value);
    location.href = "./informacoes.html";
  }

  function homeFilme(filme1) {
    sessionStorage.setItem("item_pesq", filme1)
    location.href = "./informacoes.html"
  }
=======
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
>>>>>>> 1d606857680104af2bed130274439d74c1ef99f2
