// Transforme "pedro borges bukvar"
// em Pedro Borges Bukvar

const nome1 = "pedro borges bukvar";

let nome2 = nome1.split(" ")

// console.log(nome2)

let nomePronto = " "

for (item of nome2) {

    let primeiraLetra = item.slice(0, 1)
    let restoDoNome = item.slice(1)

    primeiraLetra = primeiraLetra.toUpperCase()

    nomePronto += primeiraLetra + restoDoNome + " ";
}

console.log(nomePronto)
