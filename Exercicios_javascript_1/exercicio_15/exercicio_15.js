let raio = parseFloat(prompt("Digite o raio do cilíndro: "));
let altura = parseFloat(prompt("Digite a altura do cilíndro: "));
const pi = 3.14;

println("Raio: " + raio);
println("altura: " + altura);

let area_b = pi * (raio * raio);
println("Área base: " + area_b);

let area_l = 2 * pi * raio * altura;
println("Área lateral: " + area_l);

let area = area_b + area_l;
println("Área total: " + area);

let litros = (area / 3) * 2;
println("Litros: " + litros);

let latas = litros / 5;
println("Latas: " + latas);

let custo = Math.ceil(latas) * 40.00;
println("custo: " + parseInt(custo));

println("Quantidade: " + Math.ceil(latas));
println("Custo : R$" +  parseInt(custo)) ;
