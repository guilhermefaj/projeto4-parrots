const listaTodasCartas = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
]

//Prompt para solicitar a quantidade de cartas que serão usadas

const qtdCartas = contarCartas();

function contarCartas() {

    let qtdCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    while ((isNaN(qtdCartas)) || (qtdCartas < 4) || (qtdCartas > 14) || (qtdCartas % 2 === 1)) {
        qtdCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }
    return qtdCartas;
}

//Adiciona a quantidade de cartas selecionadas na tela e embaralha

var listaCartasSelecionadas = [];

adicionarCartas();

function adicionarCartas() {

    const ul = document.querySelector("ul");

    for (i = 0; i < qtdCartas / 2; i++) {

        listaCartasSelecionadas.push(listaTodasCartas[i], listaTodasCartas[i]);

        listaCartasSelecionadas.sort(comparador);

        function comparador() {
            return Math.random() - 0.5;
        }
    }

    for (i = 0; i < qtdCartas; i++) {
        ul.innerHTML += `
        <li>
        <div data-test="card" class="card card${[i]}" onclick="virarCartas(this)">
          <div class="front-face face">
            <img data-test="face-down-image" src="imagens/back.png">
          </div>
          <div class="back-face face">
            <img data-test="face-up-image" src="imagens/${listaCartasSelecionadas[i]}">
          </div>
        </div>
      </li>
        `;
    }
}

//Vira e mantém viradas as cartas selecionadas

function travarVirada() {
}

function desvirarCarta(carta) {
    carta.classList.remove('virar');
    carta.classList.toggle('desvirar');
}

let turn1;
let turn2;
let indice = 0
mylist = [];

contador = 0;

function virarCartas(carta) {

    contador++;

    let acertouCarta = false;

    mylist.push(carta);

    if (carta.classList.contains('desvirar')) {
        carta.classList.remove('desvirar');
    }

    carta.classList.add('virar');
    indice++;

    if (turn1 === undefined) {
        turn1 = carta.innerHTML;
    } else if (turn1 !== undefined && turn2 === undefined) {
        turn2 = carta.innerHTML;
        if (turn1 === turn2) {
            acertouCarta = true;
            travarVirada();
        } else {
            mylist.forEach(element => {
                setTimeout(() => { desvirarCarta(element) }, 1000);
            });

        }
        if (mylist.length === 2) {
            mylist = [];
            turn1 = undefined;
            turn2 = undefined;
        } if (document.querySelectorAll('.virar').length === qtdCartas) {
            function alerta() {
                alert("você ganhou em " + contador + " jogadas!")
            }
            setTimeout(() => {
                alerta()
            }, 1000);
        }
    }

}