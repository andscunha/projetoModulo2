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