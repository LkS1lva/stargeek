const email = document.getElementById("Iemail")
const senha = document.getElementById("Isenha");
const btncad = document.getElementsByName("botaoentrar")
const permlog = document.getElementById("Ilogado")

function salvar(){
    email//
}
if() {

let dados = JSON.parse(session storage.getItem("logado")) || [];
dados.push{
    {
        email : email.value
    }
}
sessionStorage.setItem("logado",JSON.stringify(dados));
}
