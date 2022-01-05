function validarEmail(emaill) {
    let validacao = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emaill)
    let emailSmall = document.getElementById('msgerror');
    
    if (validacao == false) {
      
      emailSmall.innerText='E-mail inválido';
      
    } else{ 
      emailSmall.innerText='';
    }
  }

  let email = document.getElementById('email');

function entrar(){
    let usuario = document.querySelector('#email');
    let senha = document.querySelector('#senha');

    let msgEmail = document.querySelector('#msgerror');
    
    if(usuario.value <= 0 || senha.value <= 0){
        usuario.setAttribute('style', 'border-color: red');
        senha.setAttribute('style', 'border-color: red');
        msgEmail.innerHTML = 'Insira um usuário e senha válidos'
        usuario.focus()
    }else {
        window.location.assign('../html/home.html')
    }

}