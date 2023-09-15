let button = document.querySelector("button");
button.addEventListener('click', () => {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);
    
    let h2 = document.querySelector("h2");

    h2.innerHTML = `A equação é: ${a}x2 + ${b}x + ${c}`;


    function square_root(num) {
    
        if (num < 0 || isNaN(num)) {
           return NaN;
        }
        
        
        let square_root = num / 2;
        let temp = 0;
      
        
        while (square_root != temp) {
           temp = square_root;
        
            square_root = (num / square_root + square_root) / 2;
        }
     
      return square_root;
     }
    
    
    delta = (b * b) - 4 * a * c;
    console.log("delta: " + delta);

    if (delta < 0) {
        h2.innerHTML = `Não foi possível completar o cálculo pois o valor de delta é negativo.`;
    }

    else {
        x1 = (- b + square_root(delta)) / (2 * a);
        x2 = (- b - square_root(delta)) / (2 * a);

        let h3 = document.querySelector("h3");
        h3.innerHTML = `O valor de x' é ${x1.toFixed(2)}`;

        let h4 = document.querySelector("h4");
        h4.innerHTML = `O valor de x" é ${x2.toFixed(2)}`;
    }

});
