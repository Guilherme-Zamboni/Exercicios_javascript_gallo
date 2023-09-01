let button = document.querySelector("button");
button.addEventListener('click', () => {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    
    let h2 = document.querySelector("h2");

    if (num) 
      h2.innerHTML = `APROVADO`;

    else if (media < 7 && media >= 5)
      h2.innerHTML = `RECUPERAÇÃO`;

    else
      h2.innerHTML = `REPROVADO`;

    
});