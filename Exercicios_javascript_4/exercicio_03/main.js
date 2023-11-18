const tamanho = 20;
let vetor = [];
let vetor_invertido = [];

function executar() {
    lerVetor();
    exibirVetor();
    alert(`O vetor em ordem invertida é:  ${inverterOrdem()}`);
}

function lerVetor() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe o ${i+1}° número do vetor: `));
        vetor.push(x);
    }
}

function inverterOrdem() {
    let x = 0;
    for (i = tamanho - 1; i >= 0; i--) {
        vetor_invertido[x] = vetor[i];
        x += 1;
        console.log(vetor_invertido);
    }
    return vetor_invertido;
}

function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>Vetor[${i}]=${vetor[i]}</p>`;
    }
}