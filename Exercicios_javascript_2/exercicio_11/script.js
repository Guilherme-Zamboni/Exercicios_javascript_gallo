let button = document.querySelector("button");
button.addEventListener('click', () => {
    let saldo = Number(document.getElementById("saldo").value);
    
    let h2 = document.querySelector("h2");

    if (saldo < 0)
    h2.innerHTML = `Valor inválido`;

    else if (saldo >= 0 && saldo <= 200) 
    h2.innerHTML = `Nenhum crédito`;

    else if (saldo >= 201 && saldo <= 400) 
    h2.innerHTML = `20% do valor do saldo médio`;
    
    else if (saldo >= 401 && saldo <= 600 ) 
    h2.innerHTML = `30% do valor do saldo médio`;

    else 
    h2.innerHTML = `40% do valor do saldo médio `;
    
});