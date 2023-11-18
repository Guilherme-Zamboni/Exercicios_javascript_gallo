const tamanho = 15;
let vetor1 = [];
let vetor2 = [];
let vetor3 = [];

function executar() {
    lerVetor1();
    lerVetor2();
    exibirVetor();
    alert(`A soma dos vetores em um novo vetor é:  ${somaVetor()}`);
}

function lerVetor1() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o ${i+1}° número do 1° vetor: `));
        vetor1.push(x);
    }
}

function lerVetor2() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o ${i+1}° número do 2° vetor: `));
        vetor2.push(x);
    }
}

function somaVetor() {
    for (i = 0; i < tamanho; i++) {
        vetor3[i] = vetor1[i] + vetor2[i];
    }
    return vetor3;
}

function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor1[${i}]=${vetor1[i]}</p>`;
    }

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor2[${i}]=${vetor2[i]}</p>`;
    }
}