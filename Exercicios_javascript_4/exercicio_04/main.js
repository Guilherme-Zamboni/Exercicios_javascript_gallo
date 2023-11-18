const tamanho = 20;
let vetor = [];
let vetor_multiplicacao = [];

function executar() {
    lerVetor();
    exibirVetor();
    alert(`O valor dos elementos do vetor multiplicados por seu índice é:  ${multiplicacao()}`);
}

function lerVetor() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o ${i+1}° número do vetor: `));
        vetor.push(x);
    }
}

function multiplicacao() {
    for (i = 0; i < tamanho; i++) {
        vetor_multiplicacao[i] = vetor[i] * i;
    }
    return vetor_multiplicacao;
}

function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor[${i}]=${vetor[i]}</p>`;
    }
}