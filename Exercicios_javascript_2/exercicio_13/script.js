let button = document.querySelector("button");
button.addEventListener('click', () => {
    var A = Number(document.getElementById("A").value);
    var B = Number(document.getElementById("B").value);
    var C = Number(document.getElementById("C").value);
    
    var h2 = document.querySelector("h2");

    if (A > (B + C) || B > (A + C) || C > (B + A)) {
        h2.innerHTML = `Esses lados não compoêm um triângulo.`
    }

    if (A == B && A == C) {
        h2.innerHTML = `Esses lados compoêm um triângulo equilátero.`
    }

    if (A == B && A != C) {
        h2.innerHTML = `Esses lados compoêm um triângulo isósceles.`
    }

    if (B == C && B != A) {
        h2.innerHTML = `Esses lados compoêm um triângulo isósceles.`
    }

    if (C == A && C != B) {
        h2.innerHTML = `Esses lados compoêm um triângulo isósceles.`
    }

    if (A != B && A != C && B != C) {
        h2.innerHTML = `Esses lados compoêm um triângulo escaleno.`
    }


});