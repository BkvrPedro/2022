
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos`)

setTimeout(() => {

    let time = setInterval(() => {

        if (tempoAlarmandoEmSegundos > 0) {
            console.log("Beep beep!")
            tempoAlarmandoEmSegundos--
        } else {
            clearInterval(time)
        }
    }, 1000);

}, tempoParaAlarmarEmSegundos * 1000);