const letras = ["A", "a", "B", "C", "L", "z"];

let quantidade = 0

for (let letraE of letras)
    if (letraE === "e") {
        quantidade++
        console.log(`Foram encontradas ${quantidade} letras E ou e`)
    }

console.log("Nenhuma letra E ou e foi encontrada")


const letras2 = ["A", "e", "B", "C", "E", "z"];

let qtd = 0

for (let okLetra of letras2)
    if (okLetra === "E" || okLetra === "e") {
        qtd++
    }
console.log(`Foram encontradas ${qtd} letras E ou e`)