const tamanho = 24;
let temperaturas = [];
let maior_temperatura = 0;
let menor_temperatura = 0;
let soma = 0;
let media = 0;

function executar() {
    lerVetor();
    exibirVetor();
    alert(`A maior temperatura e seu horário foi:  ${maiorTemp()}`);
    alert(`A menor temperatura e seu horário foi:  ${menorTemp()}`);
    alert(`A média das temperaturas foi:  ${mediaTemp()}`);
}

function lerVetor() {
    for (let i = 0; i < tamanho; i++) {
        let x = Number(prompt(`Informe a temperatura em graus celsius ocorrida no horário ${i}:00: `));
        temperaturas.push(x);
    }
}

function maiorTemp() {
    maior_temperatura = temperaturas[0];
    for (i = 0; i < tamanho; i++){
        if (maior_temperatura < temperaturas[i]) {
            maior_temperatura = temperaturas[i];
        }
    }
    return maior_temperatura;
}

function menorTemp() {
    menor_temperatura = temperaturas[0];
    for (i = 0; i < tamanho; i++){
        if (menor_temperatura > temperaturas[i + 1]) {
            menor_temperatura = temperaturas[i];
        }
    }
    return menor_temperatura;
}

function mediaTemp() {
    for(i = 0; i < tamanho; i++) {
        soma += temperaturas[i];
        media = soma / tamanho;
    }
    return media;
}


function exibirVetor() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    for (let i = 0; i < tamanho; i++) {
        resultado.innerHTML += `<p>${i}:00 / ${temperaturas[i]}°C</p>`;
    }
}