const { setHours, setMinutes } = require('date-fns')

const taAberto = (data) => {
    let abre = setHours(data, 8)
    let fecha = setHours(data, 18)

    abre = setMinutes(abre, 0)
    fecha = setMinutes(fecha, 0)

    return +data >= +abre && +data <= +fecha
}

console.log(taAberto(new Date(2009, 1, 1, 18, 1)));
console.log(taAberto(new Date(2001, 1, 1, 7, 59)));
console.log(taAberto(new Date(2015, 3, 26, 12)));