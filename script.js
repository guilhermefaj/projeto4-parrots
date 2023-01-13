

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

//Adiciona a quantidade de cartas selecionadas na tela

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
        <div class="card">
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

//Insere a quantidade de cartas desejada em uma lista

/*let listaCartas = [];
let todasCartas = []
inserirCartas();

function inserirCartas() {
    todasCartas = document.querySelectorAll("li");
    console.log(todasCartas);

    let contador = 0;

    while (qtdCartas > listaCartas.length) {
        listaCartas.push(todasCartas[contador]);
        listaCartas[contador].classList.remove("escondida")

        contador++;
    }

    console.log(listaCartas);
}

listaCartas.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}
*/