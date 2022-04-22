const { setHours, setMinutes, setDay } = require('date-fns')

const taAberto = (data) => {


    let abre = setHours(data, 8)
    let fecha = setHours(data, 18)

    abre = setMinutes(abre, 0)
    fecha = setMinutes(fecha, 0)

    abre = setDay(abre, 1);
    fecha = setDay(fecha, 5);

    return +data >= +abre && +data <= +fecha
}

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
