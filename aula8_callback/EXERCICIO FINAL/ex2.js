const tabuada = (numero, callback) => {

    const contagem = () => {

        for (let item = 0; item < numero.length; item++) {

            let i = 0;

            while (i <= 10) {
                console.log(`${numero[item]} x ${i} =`, numero[item] * i)
                i++
            }
        }
        clearInterval(idSetInterval)
    }

    const idSetInterval = setInterval(contagem, 1000)

    callback(idSetInterval)
}


tabuada([1, 3, 5], (resultado) => {
    console.log(resultado)
})