let prestacoes = parseInt(prompt("Digite o número total de prestações: "));
let pagas = parseInt(prompt("Digite o número de prestações pagas: "));
let valor = parseFloat(prompt("Digite o valor de cada prestação: "));

let pago = pagas * valor;
let deve = (prestacoes - pagas) * valor;

println("O cliente pagou " + pagas + " prestacoes no valor total de " + pago + " reais." );
println("Estao Faltando " + (prestacoes - pagas) + " prestacoes para serem pagas no valor de " + deve + " reais." );
