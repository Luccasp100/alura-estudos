alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100
let numeroSecreto = parseInt (Math.random () * numeroMaximo + 1); 
console.log(numeroSecreto) 
let chute;
let tentativas = 1;

while (chute != numeroSecreto) { 
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`); 
    if (chute == numeroSecreto) { 
        break;
    }          
    else { 
        if (chute > numeroSecreto) {  
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
} 
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; //operador ternário
alert(`Isso aí! Você acerto o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//anotações:
//let armazena o numero = atribuir um valor a uma variavel
//console do inspecionar
//while enquanto != difetente, não for igual
// prompt tela para digitar
//if se variavel de condição == comparação, igual
//else senão variavel de alternancia
// > maior que
//tentavivas = tentavivas + 1 // + soma os valores, ++atribui mais 1 
//if (tentativas > 1){
//    alert(`Isso aí! Você acerto o número secreto ${numeroSecreto} com ${tentativas} tentativas`); //$() //troca automaticamente os valores       
//} else {
//    alert(`Isso aí! Você acerto o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
       
