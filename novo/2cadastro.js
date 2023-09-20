const formulario = document.getElementById("formulario");
const msg = document.querySelector(".msg");
const nome = document.getElementById("Inome");
const senha = document.getElementById("Isenha");
const email = document.getElementById("Iemail");
const confirmarsenha = document.getElementById("Iconfirmarsenha");

function verificarEmail(email, evento) {
    let dados = JSON.parse(localStorage.getItem("bd"));
    if(dados == null){
        criarUsuario(evento);
    }else{
        dados.forEach(elemento =>{
                if(elemento.emailcliente == email.value){
                    msg.innerHTML = "E-mail já existente";
                    evento.preventDefault();
                } else{
                    criarUsuario(evento);
                }
        })
    }
}
formulario.onsubmit = (evento) => {
    if(nome.vaule == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu Nome";
        nome.focus();
        return null;
    }

    if(email.value==""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu email";
        senha.focus();
        return null;
    }

    if(senha.value==""){
        evento.preventDefault();
        msg.innerHTML = "Digite sua senha";
        senha.focus();
        return null;
    }

    if(senha.value != confirmarsenha.value){
        evento.preventDefault();
        msg.innerHTML = "As senhas estão diferentes"
        confirmarsenha.focus();
        return null;
    }

    verificarEmail(email.value,evento);
}

function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];
    dados.push(
        {
            nomecliente: nome.value,
            emailcliente: email.value,
            senhacliente: senha.value
        }
    )

    localStorage.setItem("bd",JSON.stringify(dados));
    msg.innerHTML = "Usuário Cadastrado com sucesso!";
    evento.preventDefault();
    setTimeout(() => {
        window.location.assign("3login.html");
    },2000)
}
