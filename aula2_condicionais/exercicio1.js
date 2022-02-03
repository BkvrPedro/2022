const valorDaCompra = 100;
const numeroDeParcelas = 3;
const unidade = (numeroDeParcelas === 100 ? "real" : "reais")
const desconto = 90 / 100

if (numeroDeParcelas == 1) {
    console.log(`Ganhe 10% de desconto pagando a vista  = R$${valorDaCompra * desconto} reais`)
} else {
    console.log(`Voce pagará em ${numeroDeParcelas}X de ${(valorDaCompra / numeroDeParcelas).toFixed(2)} reais`)
}
// USAMOS O TERNARIO 
// USAMOS O TOFIXED QUE SERVE PARA DELIMITAR A QUANTIDADE DE CASAS DECIMAIS