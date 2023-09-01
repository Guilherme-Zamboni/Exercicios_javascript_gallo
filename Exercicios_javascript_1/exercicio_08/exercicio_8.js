let nome = prompt("Digite o nome do vendedor: ");
let salario = parseFloat(prompt("Digite o salário fixo do vendedor: "));
let vendas = parseFloat(prompt("Digite o valor total das vendas realizadas pelo vendedor: "));

let comissao = vendas * 0.15;
let final = salario + comissao;

println("Nome: " + nome);
println("Salario fixo: " + salario);
println("Salario final: " + final);
