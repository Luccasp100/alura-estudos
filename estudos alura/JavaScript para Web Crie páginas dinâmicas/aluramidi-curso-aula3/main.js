function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
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

*/