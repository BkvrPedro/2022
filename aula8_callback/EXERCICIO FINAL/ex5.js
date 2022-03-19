
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

let tempoTocando

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos`)

const despertar = () => {
    setTimeout(() => {

        let intervalo = setInterval(() => {
            if (tempoTocando > 0) {
                console.log("Beep beep!")
                tempoTocando--
            } else if (numeroDeSonecas >= 0) {
                console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`)
                tempoTocando = tempoAlarmandoEmSegundos
                setTimeout(despertar, tempoSonecaEmSegundos * 1000)
                numeroDeSonecas--
                clearInterval(intervalo)
            } else {
                console.log("Fim do Timer!")
                clearInterval(intervalo)
            }
        }, 1000);
    }, tempoParaAlarmarEmSegundos * 1000);
}

despertar()