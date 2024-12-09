const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const enviar = document.getElementById("btn_enviar")

//UMA FUNÇAO DE CLICK NO BOTAO "ENVIAR" QUE MANDA AS INFORMAÇOES DOS INPUTS PARA O ARMAZENAMENTO DO NAVEGADOR(SESSION STORAGE)
//SO MANDA AS INFORMAÇOES SE TODOS CAMPOS ESTIVEREM PREENCHIDOS
enviar.addEventListener("click", function(){

    if(username.value != "" && email.value != "" && password.value != ""){
        
        let user_name = username.value;
        let user_email = email.value;
        let user_password = password.value;

        sessionStorage.setItem("nome", user_name);
        sessionStorage.setItem("email", user_email);
        sessionStorage.setItem("password", user_password);
    }
})