var h2 = document.querySelector("h2");

let button = document.querySelector("button");
button.addEventListener('click', () => {
    var num= Number(document.getElementById("num").value);

    var soma = 0;
    
    for (num; num != 0; num --) {
        console.log(num);
        var quadrado = num * num;
        var soma = quadrado + soma;
    }

    h2.innerHTML = soma;

});
