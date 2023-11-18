const tamanho = 50;
let jogadas = [];
let face1 = 0;
let face2 = 0;
let face3 = 0;
let face4 = 0;
let face5 = 0;
let face6 = 0;

function executar() {
    lerVetor();
    exibirVetor();
    resultados();
    alert(`O número de ocorrências da face com valor 1 foi ${face1}, com uma probabilidade de ${face1 / tamanho * 100}`);
    alert(`O número de ocorrências da face com valor 2 foi ${face2}, com uma probabilidade de ${face2 / tamanho * 100}`);
    alert(`O número de ocorrências da face com valor 3 foi ${face3}, com uma probabilidade de ${face3 / tamanho * 100}`);
    alert(`O número de ocorrências da face com valor 4 foi ${face4}, com uma probabilidade de ${face4 / tamanho * 100}`);
    alert(`O número de ocorrências da face com valor 5 foi ${face5}, com uma probabilidade de ${face5 / tamanho * 100}`);
    alert(`O número de ocorrências da face com valor 6 foi ${face6}, com uma probabilidade de ${face6 / tamanho * 100}`);
}

function lerVetor() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o resultado da ${i + 1}° jogada do dado: `));
        jogadas.push(x);
    }
}

function resultados() {
    for (let i = 0; i < tamanho; i++) {
        if (jogadas[i] == 1) {
            face1 += 1;
        }

        else if (jogadas[i] == 2) {
            face2 += 1;
        }

        else if (jogadas[i] == 3) {
            face3 += 1;
        }

        else if (jogadas[i] == 4) {
            face4 += 1;
        }

        else if (jogadas[i] == 5) {
            face5 += 1;
        }

        else {
            face6 += 1;
        }
    }
}


function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>${i + 1}° jogada - ${jogadas[i]}</p>`;
    }
}