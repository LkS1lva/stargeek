
//no final de tudo
function femailLogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
    if (dados == null){
        window.location.assign("login.html");
    }else{
        emailLogado = dados[0].email;
    }
}