let button = document.querySelector("button");
button.addEventListener('click', () => {
    var idade = Number(document.getElementById("idade").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    
    var h2 = document.querySelector("h2");

    if (sexo == "M" && altura > 1.70 && idade <= 20) {
        h2.innerHTML = `O peso ideal é: ${(72.7 * altura) - 58}`
    }

    if (sexo == "M" && altura > 1.70 && idade >= 21 && idade <= 39) {
        h2.innerHTML = `O peso ideal é: ${(72.7 * altura) - 53}`
    }

    if (sexo == "M" && altura > 1.70 && idade >= 40) {
        h2.innerHTML = `O peso ideal é: ${(72.7 * altura) - 45}`
    }

    if (sexo == "M" && altura <= 1.70 && idade <= 40) {
        h2.innerHTML = `O peso ideal é: ${(72.7 * altura) - 50}`
    }

    if (sexo == "M" && altura <= 1.70 && idade > 40) {
        h2.innerHTML = `O peso ideal é: ${(72.7 * altura) - 58}`
    }

    if (sexo == "F" && altura > 1.50) {
        h2.innerHTML = `O peso ideal é: ${(62.1 * altura) - 44.7}`
    }

    if (sexo == "F" && altura <= 1.50 && idade >= 35) {
        h2.innerHTML = `O peso ideal é: ${(62.1 * altura) - 45}`
    }

    if (sexo == "F" && altura <= 1.50 && idade < 35) {
        h2.innerHTML = `O peso ideal é: ${(62.1 * altura) - 49}`
    }

});