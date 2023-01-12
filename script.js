//Prompt para solicitar a quantidade de cartas que serão usadas

const qtdCartas = contarCartas()

function contarCartas() {

    let qtdCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    while ((isNaN(qtdCartas)) || (qtdCartas < 4) || (qtdCartas > 14) || (qtdCartas % 2 === 1)) {
        qtdCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }
    return qtdCartas;
}

//Insere a quantidade de cartas desejada em uma lista

const listaCartas = [];
inserirCartas();

function inserirCartas() {
    const todasCartas = document.querySelectorAll("li");
    console.log(todasCartas);

    let contador = 0;

    while (qtdCartas > listaCartas.length) {
        listaCartas.push(todasCartas[contador].classList.remove("escondida"));

        contador++;
    }

    console.log(listaCartas);
}

