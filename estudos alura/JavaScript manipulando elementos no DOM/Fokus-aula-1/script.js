const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
alterarContexto('descanso-longo');
})

function alterarContexto(contexto){ //() = parametro
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `
            break;

        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
    
        default:
            break;
    }
}

/* 
ANOTAÇÕES:
longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', 'imagens/descanso-longo.png');
})

inner.HTML = para  colocar dados tipos texto na nossa pagina (muito util para passar um formato completo em HTML com dados e TAGS do HTML)
*/