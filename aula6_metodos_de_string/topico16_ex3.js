// const data = {
//     dia: 01,
//     mes: 01,
//     ano: 2021,
// }

function imprimirData(dia, mes, ano) {

    const diaFormatado = String(dia).padStart(2, "0")
    const mesFormatado = String(mes).padStart(2, "0")


    console.log(`${diaFormatado}/${mesFormatado}/${ano}`)
}

imprimirData(1, 1, 2021)