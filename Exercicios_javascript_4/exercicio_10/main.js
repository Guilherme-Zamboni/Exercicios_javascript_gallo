const tamanho = 30;
let gabarito = [];
let alunos = 0;
let aluno = "";
resposta = "";
let gabarito_alunos = {}
acertos = 0;

function executar() {
    lerGabarito();
    lerAlunos();
    resultados();
    menu();
}

function lerGabarito() {
    pergunta = prompt("Você deseja criar um novo gabarito ou utilizar um modelo predefinido? (novo/existente)")
    if (pergunta == "novo") {
        for (let i = 0; i < tamanho; i++) {
            let x = Number(prompt(`Informe o resultado da ${i + 1}° questão: `));
            gabarito.push(x);
        }
    }
    
    else {
        gabarito = ["A", "B", "C", "D", "E", "B", "B", "B", "C", "D", "A", "B", "C", "D", "E", "A", "B", "C", "D", "E", "B", "B", "B", "C", "D", "A", "B", "C", "D", "E"];
    }

}

function lerAlunos() {
    alunos = Number(prompt(`Informe o número de alunos: `));

    for (var i = 1; i <= alunos; i++) {
        var nomeVariavel = "aluno" + i;
        gabarito_alunos[nomeVariavel] = [];
        for (var x = 1; x <= tamanho; x++) {
            nota = prompt(`Informe a resposta da ${x}° questão do aluno ${i}: (A, B, C, D, E)`);
            gabarito_alunos[nomeVariavel].push(nota);
        }
    }
}

function resultados() {
    let acertos = 0;
    aluno = "aluno" + Number(prompt("Digite o número do aluno para ver o número de acertos: "));

    for (let i = 0; i < tamanho; i++) {
        let resposta = gabarito[i];
        let respostaAluno = gabarito_alunos[aluno][i];

        if (String(respostaAluno) === String(resposta)) {
            acertos += 1;
        }
    }

    alert(`O aluno ${aluno} teve um total de ${acertos} acertos`);
}

function menu() {
    var continuar = "sim"
    while (continuar == "sim") {
        continuar = prompt("Deseja verificar o número de acertos de outro aluno? (sim/não)");

        if (continuar == "sim") {
            resultados();
        }

        else {

        }
    }
}

