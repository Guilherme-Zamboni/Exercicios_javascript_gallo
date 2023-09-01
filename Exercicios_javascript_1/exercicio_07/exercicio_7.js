let fabrica = parseFloat(prompt("Digite o valor de fábrica do automóvel: "));

let revendedor = fabrica * 0.25;
let imposto = fabrica * 0.45;
let total = fabrica + revendedor + imposto;

println("O valor final do automovel e: " + total);