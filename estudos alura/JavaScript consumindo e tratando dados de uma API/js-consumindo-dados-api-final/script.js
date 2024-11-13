async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //template string
    var consultaCepConvertida  = await consultaCep.json();
    if (consultaCepConvertida.erro){
        throw Error('Esse CEP não existe!');
    }

    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    
    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;

    console.log(consultaCepConvertida);
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido!</p>`
        console.log('erro')
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));











/* 
.then(resposta => resposta.json())
.then(r => {
    if(r.erro) {
        throw Error('Esse CEP não existe!');
    } else {
        console.log(r)
    }
}).catch(erro => console.log(erro)).finally(mensagem => console.log('Processamento concluído!'));

console.log(consultaCEP);
*/

/* 
ANOTAÇÕES:

Síncrono: Uma tarefa é concluída após a outra (padrão JavaScript)

Assíncrono: Há tarefas executadas em "segundo plano"

Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas.

Call Stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc.

Task Queue: é a fila de tarefas assíncronas. Se algo precisa ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.

API: Interface de Programação de aplicação (cliente = solicitação //API// servidor = resposta)

fetch = obrigatório ter um link com o metodo fetch

catch = "pegar" o erro

then quando a nossa promessa foi resolvida e catch quando a nossa promessa foi rejeitada

arrow function =>

O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes: o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.

*/