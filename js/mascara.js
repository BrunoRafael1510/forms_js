//async/await e no uso do método Promise
const pesquisaCEP = async() => {
    // alert("olá " + cep);
    const cep = document.getElementById('cep').value;

    //passando o valor para api com template string
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    
    /* O método global fetch() inicia o processo de busca de um recurso da rede, 
    retornando uma promessa que é cumprida assim que a resposta estiver disponível. */
    const dados = await fetch(url);
    const endereco = await dados.json();
    
    //passando valores para funcao preencher formulariao
    preencherFormulario(endereco);
};

/* Função para preencher o formulario */
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

//https://www.youtube.com/watch?v=imk6Y0viabg&t=191s

//criando um evento para pegar o cep
document.getElementById('cep')
    .addEventListener('focusout', pesquisaCEP);




