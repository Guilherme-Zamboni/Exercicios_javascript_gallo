let saldo = 500.00;

println("Seu saldo e: R$" + saldo);

let cheque = prompt("Digite o valor do cheque: ");

println("O seu saldo agora e: R$" + (parseFloat(saldo) + parseFloat(cheque)));