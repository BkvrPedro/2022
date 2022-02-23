const numeroCartao = '1111222233334444';

const numeroCartaoEscondido = " "

let primeirosNumeros = " "
let ultimosNumeros = " "

primeirosNumeros = numeroCartao.slice(0, 4)
ultimosNumeros = numeroCartao.slice(12, 16)

console.log(`${primeirosNumeros} **** **** ${ultimosNumeros}`)