let nome = prompt("Digite o nome do aluno: ");
let nota_1 =  parseFloat(prompt("Digite a primeira nota: "));
let nota_2 =  parseFloat(prompt("Digite a segunda nota: "));
let nota_3 =  parseFloat(prompt("Digite a terceira nota: "));

let media = (nota_1 + nota_2 + nota_3) / 3;

println("A media do aluno " + nome + "foi " + media + ".");
