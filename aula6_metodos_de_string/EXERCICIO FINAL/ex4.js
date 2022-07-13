let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let identificadorModificado = identificador.padStart(6, "0")

console.log(identificadorModificado)


let nomeModificado = " "
let arrayNome = nome.split(" ")

for (item of arrayNome) {

    let primeiraLetra = " "
    let restanteLetras = " "

    primeiraLetra = item.slice(0, 1)
    restanteLetras = item.slice(1)

    nomeModificado += primeiraLetra.toUpperCase() + restanteLetras + " "
}

console.log(nomeModificado)


let emailModificado = " "

emailModificado = email.trim(" ")

console.log(emailModificado)
