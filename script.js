const qtdCartas = contarCartas()

function contarCartas() {

    let qtdCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    while ((isNaN(qtdCartas)) || (qtdCartas < 4) || (qtdCartas > 14) || (qtdCartas % 2 === 1)) {
        qtdCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }
    return qtdCartas;
}

const listaCartas = [];

inserirCartas();

function inserirCartas() {
    const listaCartas = document.querySelector("ul");
    console.log(listaCartas);
}

console.log(document.querySelectorAll("li"));