//CRIANDO OS ELEMENTOS DA AREA LOGADO PELO JAVASCRIPT
function CreateElements(){

    let user_name = sessionStorage.getItem("nome");
    let user_email = sessionStorage.getItem("email");
    let user_password = sessionStorage.getItem("password");

    const body = document.querySelector("body");

    const container = document.createElement("div");

    container.style.width = "400px";
    container.style.padding = "40px";
    container.style.textAlign = "center";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.backgroundColor = "rgb(230, 230, 230"; 
    container.style.border = "4px solid rgb(50, 50, 50)"; 
    container.style.borderRadius = "5px";
    container.style.boxShadow = "0 0 10px rgb(40, 40, 40)";
    
    const titulo = document.createElement("h2");

    titulo.textContent = "Usuário Logado com Sucesso!";
    titulo.style.fontSize = "32px";
    titulo.style.marginBottom = "40px";

    const name = document.createElement("p");

    name.textContent = "Seu nome de Usuário é: " + user_name;
    name.style.fontSize = "18px";
    name.style.color = "black";
    name.style.fontWeight = "bold";

    const email = document.createElement("p");

    email.textContent = "Seu email é: " + user_email;
    email.style.fontSize = "18px";
    email.style.color = "black";
    email.style.fontWeight = "bold";
    email.style.margin = "10px 0";

    const password = document.createElement("p");
    
    password.textContent = "Sua senha é: " + user_password;
    password.style.fontSize = "18px";
    password.style.color = "black";
    password.style.fontWeight = "bold";
    password.style.marginBottom = "40px";

    //CRIEI O BOTAO AQUI MAS USEI UMA "ID" PARA ESTILIZAR NO CSS
    const inicio = document.createElement("button");
        
    inicio.id = "btn_inicio";
    inicio.textContent = "Inicio";

    inicio.addEventListener("click", function(){

        window.location.href = "../index.html";
    })

    body.appendChild(container);
    container.appendChild(titulo);
    container.appendChild(name);
    container.appendChild(email);
    container.appendChild(password);
    container.appendChild(inicio);
}

CreateElements();




