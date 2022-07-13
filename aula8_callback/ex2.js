const calculoImc = (altura, peso, callback) => {

    const calculo = peso / (altura * altura);
    let resultado;

    if (calculo < 18) {
        resultado = "DESNUTRICAO"
    } else if (calculo < 25) {
        resultado = "NORMAL"
    } else {
        resultado = "SOBREPESO"
    }

    callback(calculo, resultado)
}

calculoImc(1.90, 85, (calculo, resultado) => {
    console.log(`IMC: ${calculo}`)
    console.log(`FAIXA: ${resultado}`)
})