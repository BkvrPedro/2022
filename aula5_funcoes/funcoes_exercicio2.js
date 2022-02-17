
function faixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem"
    } else if (idade <= 65) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}

const valorRetornadoDaFuncao = faixaEtaria(55);
console.log(valorRetornadoDaFuncao)
