let button = document.querySelector("button");
button.addEventListener('click', () => {
    let idade = Number(document.getElementById("idade").value);
    
    let h2 = document.querySelector("h2");

    if (idade < 5) 
    h2.innerHTML = `Muito novo`;

    else if (idade >= 5 && idade <= 7)
    h2.innerHTML = `Infantil A`;

    else if (idade >= 8 && idade <= 10 ) 
    h2.innerHTML = `Infantil B`;

    else if (idade >= 11 && idade <= 13 ) 
    h2.innerHTML = `Juvenil A`;
    

    else if (idade >= 14 && idade <= 17 )
    h2.innerHTML = `Juvenil B`;

    else 
    h2.innerHTML = `Adulto`;
    
});