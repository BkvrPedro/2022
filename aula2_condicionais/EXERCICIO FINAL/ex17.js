//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const vlrParc = (valorDoProduto / 100) / quantidadeDoParcelamento
const parcPg = valorPago / vlrParc
const parcRest = quantidadeDoParcelamento - parcPg

console.log(`Restam ${parcRest} parcelas de R$${vlrParc}`)