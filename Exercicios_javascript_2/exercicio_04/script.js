let button = document.querySelector("button");
button.addEventListener('click', () => {
    let ano = Number(document.getElementById("ano").value);

    var final = []
    var num = ano;
    var digits = num.toString();

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] == digits[digits.length - 1] || digits[i] == digits[digits.length]) {
            final.push(digits[i]);
            alert(final)
        }

        else {
            
        }
    }

    alert(final)

    let h2 = document.querySelector("h2");

    if (parseInt(final) % 4 == 0) 
      h2.innerHTML = `Esse ano é bissexto`;

    else
      h2.innerHTML = `Esse ano não é bissexto`;

    
});