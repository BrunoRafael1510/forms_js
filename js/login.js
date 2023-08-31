function verifica() {
    /* pegando os valores do email e semha */
    let email = document.querySelector("#username").value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Obrigatório o preenchimento do email e senha");
        document.querySelector("#username").focus()
    } else {
        pesquisa(email, senha);
    };

};

function pesquisa(email, senha) {

    if (email == "astarote@gmail.com" && senha == "1234Se") {
        
        window.open("../assets/index.html");
        window.close();
        
    } else {
        alert("Email ou senha inválido");
        document.querySelector("#username").focus()
    }
};

function cadastro() {
    let cadastro = {};

}