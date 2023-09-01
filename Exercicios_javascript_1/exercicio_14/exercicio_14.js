let A = parseFloat(prompt("Digite o valor de A: "));
let B = parseFloat(prompt("Digite o valor de B: "));

println("A: " + A);
println("B: " + B);

let hold = A;
A = B;
B = hold;

println("A: " + A);
println("B: " + B);


