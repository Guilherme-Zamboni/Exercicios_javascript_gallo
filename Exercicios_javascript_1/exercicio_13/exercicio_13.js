function square_root(num) {
    
    if (num < 0 || isNaN(num)) {
       return NaN
    }
    
    
    let square_root = num / 2
    let temp = 0
  
    
    while (square_root != temp) {
       temp = square_root
  
    
        square_root = (num / square_root + square_root) / 2
    }
 
  return square_root
 }


let a = parseFloat(prompt("Digite o valor de a: "));
let b = parseFloat(prompt("Digite o valor de b: "));
let c = parseFloat(prompt("Digite o valor de c: "));

println("A equacao e: " + a + "x2" + " + " + b + "x" + " + " + c)

delta = (b * b) - 4 * a * c;
println("delta: " + delta);

x1 = (- b + square_root(delta)) / (2 * a);
x2 = (- b - square_root(delta)) / (2 * a);

println("x1 = " + x1);
println("x2 = " + x2);