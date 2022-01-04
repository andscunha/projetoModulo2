let msguser = document.getElementById("msgemail");


function validaEmail(field){
    
    let usuario = field.value.substring(0, field.value.indexOf("@"));
    let dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)){
            msguser.innerHTML= "<font color='green'>E-mail válido!</font>" ;
            console.log(validaEmail())
            }else {
                msguser.innerHTML="<font color='red'>E-mail inválido!</font>";
            }

        }

function submit(){

let submitEmail = document.getElementById("email");
    
    if(submitEmail.value == 0){
        msguser.innerHTML= "Digite um E-mail válido!" ;
    } else{
        document.getElementById("formulario").submit();
        alert("E-mail enviado com sucesso!");
        
        
    }

}