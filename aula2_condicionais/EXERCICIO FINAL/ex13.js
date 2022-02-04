//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const credito = (5 / 100);
const cheque = (3 / 100);
const debitoOuDinheiro = (10 / 100);

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * credito)) / 100).toFixed(2)}`)
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * cheque)) / 100).toFixed(2)}`)
} else if (tipoDePagamento === "debito") {
    console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * debitoOuDinheiro)) / 100).toFixed(2)}`)
} else if (tipoDePagamento === "dinheiro") {
    console.log(`Valor a ser pago: R$${((valorDoProduto - (valorDoProduto * debitoOuDinheiro)) / 100).toFixed(2)}`)
}