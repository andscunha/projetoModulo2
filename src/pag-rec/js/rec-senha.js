let msguser = document.getElementById("msgemail");

function validaEmail(field) {
  let usuario = field.value.substring(0, field.value.indexOf("@"));
  let dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    msguser.innerHTML = "<font color='green'>E-mail válido!</font>";
    alert("Foi enviado um e-mail para você!");
    console.log(validaEmail());
  } else {
    msguser.innerHTML = "<font color='red'>E-mail inválido!</font>";
    alert("Digite um e-mail válido!");
  }
}
