function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = tocaSomPom;


/*ANOTAÇÕES:

 class = . / id = # / nome da tag = nome da tag 

 querrySelector: busca por seletores

 const = criar uma referencia 

*/