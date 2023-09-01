let button = document.querySelector("button");
button.addEventListener('click', () => {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10;
    alert(`A nota do aluno foi: ${media}`);
    
    let h2 = document.querySelector("h2");

    if (media >= 7) 
      h2.innerHTML = `APROVADO`;

    else if (media < 7 && media >= 5)
      h2.innerHTML = `RECUPERAÇÃO`;

    else
      h2.innerHTML = `REPROVADO`;

    
});