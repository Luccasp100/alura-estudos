let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function exibirMentagemInicial() {
    exibirTextoNaTela ("h1", "Jogo do número secreto");
    exibirTextoNaTela ("p", "Escolha um número entre 1 e 10");
}

exibirMentagemInicial();

function verificarChute() { 
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela("p", "O número é menor");
    } else {
        exibirTextoNaTela("p", "O número é maior");
        }
        tentativas++;
        limparCampo();
    }    
} 

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeNumeroEscolhido = listaDeNumerosSorteados.length;

    if (quantidadeDeNumeroEscolhido == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMentagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

//anotações:
//let titulo = document.querySelector("h1"); // let criar variavel
//titulo.innerHTML = "Jogo do número secreto"; //altera textos no HTML

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escoha um número entre 1 e 10";

// = atribui valor == compara valor 

// tipo string, tipo number, tipo boolean (boleano) verdadeiro ou falso ou 1 e 0,

//lenght começa no indice [0] sempre