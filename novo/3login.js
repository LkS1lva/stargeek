const formulario = document.getElementById("formulario");
const msg = document.querySelector(".msg");
const email =document.getElementById("Iemail");
const senha = document.getElementById("Isenha");

formulario.onsubmit = (evt) => {
    let dados = JSON.parse(localStorage.getItem("bd"));
    let logado;
    dados.forEach((elemento) => {
        if(elemento.emailcliente == email.value && elemento.senhacliente == senha.value){
            msg.innerHTML = "Aguarde o redirecionamento...";
            sessionStorage.setItem("email",email.value);
            setTimeout(()=>{
                window.location.assign("4catalogo.html");
            },2000);
            evt.preventDefault();
            logado = "ok";
            return true;
        }

        if(logado != "ok"){
            msg.innerHTML = "Usuario ou senha incorretos";
            evt.preventDefault();
            return null;
        }
    });
}