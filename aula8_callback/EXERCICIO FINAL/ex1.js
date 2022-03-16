const tabuada = (numero, callback) => {

    let i = 0

    const contagem = () => {
        if (i > 10) {
            clearInterval(idSetInterval)
        } else {
            console.log(`${numero} x ${i} =`, 5 * i)
            i++
        }

    }

    const idSetInterval = setInterval(contagem, 1000)

    callback(idSetInterval)
}


tabuada(5, (resultado) => {
    console.log(resultado)
})