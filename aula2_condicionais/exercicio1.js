const valorDaCompra = 100;
const numeroDeParcelas = 12;
const unidade = (numeroDeParcelas === 100 ? "real" : "reais")
const desconto = 90 / 100
const i = 1 / 100

let m = valorDaCompra * (1 + i) ** numeroDeParcelas;
console.log(m);


// if (numeroDeParcelas == 1) {
//     console.log(`Ganhe 10% de desconto pagando a vista  = R$${valorDaCompra * desconto} reais`)
// } else {
//     console.log(`Voce pagará em ${numeroDeParcelas}X de ${(valorDaCompra / numeroDeParcelas).toFixed(2)} reais`)
// }


// USAMOS O TERNARIO 
// USAMOS O TOFIXED QUE SERVE PARA DELIMITAR A QUANTIDADE DE CASAS DECIMAIS

if (numeroDeParcelas > 1 && numeroDeParcelas < 7) {
    console.log(`Voce pagará em ${numeroDeParcelas} parcelas de R$${(valorDaCompra / numeroDeParcelas).toFixed(2)} sem juros`)
} else {
    console.log(`Voce pagará em ${numeroDeParcelas} parcelas de R$${(m / numeroDeParcelas).toFixed(2)}`)
}