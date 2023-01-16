

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
        <div class="card ${[i]}" onclick="virarCartas(this)">
          <div class="front-face face">
            <img src="imagens/back.png">
          </div>
          <div class="back-face face">
            <img src="imagens/${listaCartasSelecionadas[i]}">
          </div>
        </div>
      </li>
        `;
    }
}

//Vira e mantém viradas as cartas selecionadas

let turn;

function virarCartas(carta) {
    console.log(carta);

    carta.classList.toggle("virar");
}
