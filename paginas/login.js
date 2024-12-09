const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("btn_enviar");

//FUNÇAO DE CLICK NO BOTAO "LOGIN" QUE PEGA AS INFORMAÇOES NO ARMAZENAMENTO DO NAVEGADOR PARA O LOGIN
login.addEventListener("click", function(){

    let user_name = sessionStorage.getItem("nome");
    let user_password = sessionStorage.getItem("password");

    //VERIFICA SE AS INFORMAÇOES DOS CAMPOS DOS INPUTS(USERNAME E PASSWORD) SAO AS MESMAS DO ARMAZENAMENTO DO NAVEGADOR
    //SE SIM MANDA PARA PAGINA DE "LOGADO COM SUCESSO" / SE NAO DISPARA UM ALERTA COM UMA MENSAGEM
    if(username.value == user_name && password.value == user_password){

        window.location.href = "logado.html";

    }else{

        alert("Usuário não encontrado! Preencha os campos corretamente");
    }
})