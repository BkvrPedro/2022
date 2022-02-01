// TAXA DE JUROS

let m = 90_000
let c = 60_000
let n = 24

let mc = m / c;

let x = mc ** (1 / n);

let i = (x - 1) * 100;

console.log(i);

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${m} reais`);