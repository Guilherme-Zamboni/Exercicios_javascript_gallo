const tamanho = 10;
let numeros = [];
let soma = 0;
let media = 0;

function executar() {
    lerVetor();
    exibirVetor();
    alert(`A média é:  ${mediaVetor()}`);
}

function lerVetor() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o ${i + 1}° valor real do vetor: `));
        numeros.push(x);
    }
}

function mediaVetor() {
    for(i = 0; i < tamanho; i++) {
        soma += numeros[i];
        media = soma / tamanho;
    }
    return media;
}


function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>${i + 1}° - ${numeros[i]}</p>`;
    }
}