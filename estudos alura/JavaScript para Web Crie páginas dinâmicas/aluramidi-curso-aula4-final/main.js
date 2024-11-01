function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

/*ANOTAÇÕES:

 class = . / id = # / nome da tag = nome da tag 

 querrySelector: busca por seletores

 const = criar uma referencia 

 while = enquanto

 let = variavel

 for = para

 contador = contador + 1 = contador++

 o sinal de = em Javascript serve para "armazenar" o dado da direita na esquerda (esquerda = direita);
                                            (const listaDeTeclas = document.querySelectorAll('.tecla'));

 para fazer uma comparação de igualdade use == ou ===

 para dizer "ou" em Javascript utilize || 

 != not equals (não for igual)

 && and ("e") (soma)
*/