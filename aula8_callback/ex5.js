const microondas = (tempo) => {

    let numero = 1;

    console.log("INICIOU")

    const contador = () => {
        console.log(numero);
        numero++;

        if (numero > (tempo / 1000)) {
            console.log("FINALIZOU");

            clearInterval(idSetInterval)
        }

    }

    let idSetInterval = setInterval(contador, 1000)
}

microondas(5000)
