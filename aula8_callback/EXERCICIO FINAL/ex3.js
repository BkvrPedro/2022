const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"]
let rodada = 10;
let tempoPorJogador = (rodada / jogadores.length) * 1000  // em segundos

function contador() {

    let i = 0
    let time

    function imprimir(jogadores) {

        console.log(jogadores[i])
        i++

        if (i === jogadores.length) {
            return clearInterval(time)
        }
    }

    time = setInterval(() => imprimir(jogadores), tempoPorJogador)

}

contador()
