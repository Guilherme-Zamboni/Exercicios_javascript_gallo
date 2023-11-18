const tamanho = 10;
let numeros = [];
let impares = [];
let pares = [];

function executar() {
    lerVetor();
    exibirVetor();
    divisaoVetor();
    alert(`Os números ímpares do vetor são: ${impares}`);
    alert(`Os números pares são: ${pares}`);
}

function lerVetor() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o ${i + 1}° valor do vetor: `));
        numeros.push(x);
    }
}

function divisaoVetor() {
    for (let i = 0; i < tamanho; i++) {
        if (numeros[i] % 2 != 0) {
            impares.push(numeros[i]);
        }

        else {
            pares.push(numeros[i]);
        }
    }
}

function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>${i + 1}° - ${numeros[i]}</p>`;
    }
}