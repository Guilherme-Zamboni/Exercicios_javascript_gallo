const salaDeCinema = Array.from({ length: 4 }, () => Array(20).fill(false));

function exibirPoltronas() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<p>Estado das Poltronas:</p>";

    for (let i = 0; i < salaDeCinema.length; i++) {
        const fileira = String.fromCharCode(65 + i);
        const poltronasHTML = salaDeCinema[i].map(poltrona => poltrona ? '<span style="color:red;">X</span>' : '_').join(' ');
        outputDiv.innerHTML += `<p>Fileira ${fileira}: ${poltronasHTML}</p>`;
    }
}

function comprarPoltrona() {
    const fileira = document.getElementById("fileira").value.toUpperCase();
    const numeroPoltrona = parseInt(document.getElementById("numeroPoltrona").value);

    if (salaDeCinema[fileira.charCodeAt(0) - 65][numeroPoltrona - 1] === false) {
        salaDeCinema[fileira.charCodeAt(0) - 65][numeroPoltrona - 1] = true;
        alert(`Ingresso comprado para a poltrona ${fileira}${numeroPoltrona}.`);
    } else {
        alert(`A poltrona ${fileira}${numeroPoltrona} já está ocupada. Escolha outra.`);
    }
}

function exibirStatus() {
    let poltronasVazias = 0;
    let poltronasOcupadas = 0;

    for (let i = 0; i < salaDeCinema.length; i++) {
        for (let j = 0; j < salaDeCinema[i].length; j++) {
            if (salaDeCinema[i][j] === false) {
                poltronasVazias++;
            } else {
                poltronasOcupadas++;
            }
        }
    }

    alert(`Total de poltronas vazias: ${poltronasVazias}\nTotal de poltronas ocupadas: ${poltronasOcupadas}`);
}

function main() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<p>1 - Exibir Poltronas<br>2 - Comprar Poltrona<br>3 - Exibir Status<br>4 - Sair</p>";

    while (true) {
        const opcao = parseInt(prompt("Escolha uma opção:\n1 - Exibir Poltronas\n2 - Comprar Poltrona\n3 - Exibir Status\n4 - Sair"));

        switch (opcao) {
            case 1:
                exibirPoltronas();
                return;
            case 2:
                outputDiv.innerHTML = '<p>Informe a fileira (A, B, C, D): <input type="text" id="fileira"></p>';
                outputDiv.innerHTML += '<p>Informe o número da poltrona: <input type="text" id="numeroPoltrona"></p>';
                outputDiv.innerHTML += '<button onclick="comprarPoltrona()">Comprar Poltrona</button>';
                return;
            case 3:
                exibirStatus();
                break;
            case 4:
                return;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}
