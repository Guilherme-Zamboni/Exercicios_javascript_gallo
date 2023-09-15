let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num_1 = Number(document.getElementById("num1").value);
    let num_2 = Number(document.getElementById("num2").value);
    let num_3 = Number(document.getElementById("num3").value);
    
    let h2 = document.querySelector("h2");

    function compareNumbers(a, b) {
        return b - a;
      }

    let lista = [];
    lista.push.apply(lista, [num_1, num_2, num_3]);
    lista = lista.sort(compareNumbers);

    h2.innerHTML = `A lista em ordem decrescente é: ${lista}`;



});