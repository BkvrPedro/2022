const texto = "Aprenda programar do zero na Cubos Academy";

let array = texto.split(" ")

let textoComTraco = " "
let textoFinal = " "
let imprimir = 0


for (item of array) {
    textoComTraco += item + "-"
    imprimir = textoComTraco.length - 1
    textoFinal = textoComTraco.slice(0, imprimir)
}

console.log(textoFinal)