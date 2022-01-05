function validaNome() {
  let dx = document.getElementById("nome");

  if (dx.value.length === 0) {
    dx.classList.add("input-invalid");
    return false;
  }
  dx.classList.remove("input-invalid");
  return true;
}

function validaCpf() {
  let dx = document.getElementById("cpf");

  let i;
  s = dx.value;
  let c = s.substr(0, 9);
  let dv = s.substr(9, 2);
  let d1 = 0;
  let v = false;

  for (i = 0; i < 9; i++) {
    d1 += c.charAt(i) * (10 - i);
  }
  if (d1 == 0) {
    dx.classList.add("input-invalid");
    v = true;
    return false;
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) d1 = 0;
  if (dv.charAt(0) != d1) {
    dx.classList.add("input-invalid");
    v = true;
    return false;
  }

  d1 *= 2;
  for (i = 0; i < 9; i++) {
    d1 += c.charAt(i) * (11 - i);
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) d1 = 0;
  if (dv.charAt(1) != d1) {
    dx.classList.add("input-invalid");
    v = true;
    return false;
  }
  if (!v) {
    dx.classList.remove("input-invalid");
    return true;
  }
}

function validaEmail() {
  let dx = document.getElementById("email");
  if (dx.value.length === 0) {
    dx.classList.remove("input-invalid");
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dx.value)) {
    dx.classList.remove("input-invalid");
    return true;
  }
  dx.classList.add("input-invalid");
  return false;
}

function validaSenha() {
  let dx = document.getElementById("password");
  let dy = document.getElementById("password2");

  if (dy.value.length >= 8 && dx.value === dy.value) {
    dx.classList.remove("input-invalid");
    dy.classList.remove("input-invalid");
    return true;
  }
  dx.classList.add("input-invalid");
  dy.classList.add("input-invalid");
  return false;
}

function validaCep() {
  let dx = document.getElementById("cep");

  if (dx.value.length === 0) {
    dx.classList.add("input-invalid");
    return false;
  }
  dx.classList.remove("input-invalid");
  return true;
}

function validaLogradouro() {
  let dx = document.getElementById("logradouro");

  if (dx.value.length === 0) {
    dx.classList.add("input-invalid");
    return false;
  }
  dx.classList.remove("input-invalid");
  return true;
}

function validaNumero() {
  let dx = document.getElementById("numero");

  if (dx.value.length === 0) {
    dx.classList.add("input-invalid");
    return false;
  }
  dx.classList.remove("input-invalid");
  return true;
}

function validaFormulario() {
  return validaNome() && validaCpf && validaEmail() && validaSenha();
}

function validaFormulario2() {
  return validaCep() && validaLogradouro && validaNumero();
}

let formularioCadastro1 = document.getElementById("cadastro-form-1");
let formularioCadastro2 = document.getElementById("cadastro-form-2");
let botaoFormulario = document.getElementById("botao-cadastro");
let botaoFormularioTexto = document.getElementById("botao-cadastro-texto");

function finalizaCadastro() {
  if (validaFormulario2()) {
    window.location = "./precos.html";
  } else {
    alert("Você tem campos inválidos!");
  }
}

function avancarCadastro() {
  if (validaFormulario()) {
    botaoFormularioTexto.innerHTML = "Finalizar";
    botaoFormulario.onclick = () => {
      finalizaCadastro();
    };
    formularioCadastro1.style.display = "none";
    formularioCadastro2.style.display = "flex";
  } else {
    alert("Você tem campos inválidos!");
  }
}
