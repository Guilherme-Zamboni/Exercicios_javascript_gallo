let button = document.querySelector("button");
button.addEventListener('click', () => {
    let cod = Number(document.getElementById("codigo").value);
    let quant = Number(document.getElementById("quantidade").value);
    
    let h2 = document.querySelector("h2");
    let valor = parseFloat();

    switch(cod) {

    case cod == 100:
        var lanche = "Cachorro Quente";
        valor = parseFloat(1.20).toFixed(2);
        break;

    case cod == 101:
        var lanche = "Bauru simples";
        valor = parseFloat(1.30).toFixed(2);
        break;

    case cod == 102:
        var lanche = "Bauru com ovo";
        valor = parseFloat(1.50).toFixed(2);
        break;

    case cod == 103:
        var lanche = "Hambúrguer";
        valor = parseFloat(1.20).toFixed(2);
        break;
    
    case cod == 104:
        var lanche = "Cheeseburguer ";
        valor = parseFloat(1.30).toFixed(2);
        break;

    case cod == 105:
        var lanche = "Refrigerante";
        valor = parseFloat(1.00).toFixed(2);
        break;

    default:
    h2.innerHTML = `Código Inválido`;
    
    }


    
    if (cod < 100 && cod > 105)
    console.log(valor.toFixed(2));
    var total = valor * quant;
    h2.innerHTML = `Será pago ${total.toFixed(2)} reais por ${quant} ${lanche}`;

});