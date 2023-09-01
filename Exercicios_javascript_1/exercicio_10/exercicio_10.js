let valor = parseFloat(prompt("Digite o valor da prestacao: "));
let taxa = prompt("Digite a taxa de juros imposta pelo banco: ");
let tempo = prompt("Digite o numero de dias em atraso: ");

let Prestação = valor + (valor * (taxa/100) * tempo);

println("O valor da prestacao em atraso e: R$ " + prestacao);
